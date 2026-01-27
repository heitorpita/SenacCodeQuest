import { query, pool } from "../../../db/db.js";

export default class VendasModel {

    static async listar() {
        const sql = `
            SELECT
                s.id,
                s.vehicle_id,
                v.brand as vehicle_brand,
                v.model as vehicle_model,
                v.year as vehicle_year,
                s.client_id,
                c.name as client_name,
                s.seller_id,
                u.name as seller_name,
                s.final_price,
                s.payment_method,
                s.status,
                s.notes,
                s.created_at,
                s.updated_at
            FROM sales s
            JOIN vehicles v ON v.id = s.vehicle_id
            JOIN clients c ON c.id = s.client_id
            JOIN users u ON u.id = s.seller_id
            ORDER BY s.created_at DESC
        `;
        const result = await query(sql, []);
        return result.rows;
    }

    static async listarPorCliente(clientId) {
        const sql = `
            SELECT
                s.id,
                s.vehicle_id,
                v.brand as vehicle_brand,
                v.model as vehicle_model,
                v.year as vehicle_year,
                s.client_id,
                c.name as client_name,
                s.seller_id,
                u.name as seller_name,
                s.final_price,
                s.payment_method,
                s.status,
                s.notes,
                s.created_at,
                s.updated_at
            FROM sales s
            JOIN vehicles v ON v.id = s.vehicle_id
            JOIN clients c ON c.id = s.client_id
            JOIN users u ON u.id = s.seller_id
            WHERE s.client_id = $1
            ORDER BY s.created_at DESC
        `;
        const result = await query(sql, [clientId]);
        return result.rows;
    }

    static async buscarPorId(id) {
        const sql = `
            SELECT
                s.id,
                s.vehicle_id,
                v.brand as vehicle_brand,
                v.model as vehicle_model,
                v.year as vehicle_year,
                v.price as vehicle_original_price,
                s.client_id,
                c.name as client_name,
                c.document as client_document,
                s.seller_id,
                u.name as seller_name,
                s.final_price,
                s.payment_method,
                s.status,
                s.notes,
                s.created_at,
                s.updated_at
            FROM sales s
            JOIN vehicles v ON v.id = s.vehicle_id
            JOIN clients c ON c.id = s.client_id
            JOIN users u ON u.id = s.seller_id
            WHERE s.id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows[0];
    }

    static async verificarVendaAtivaVeiculo(vehicleId) {
        const sql = `
            SELECT id, status 
            FROM sales 
            WHERE vehicle_id = $1 AND status IN ('em_andamento', 'concluida')
        `;
        const result = await query(sql, [vehicleId]);
        return result.rows[0];
    }

    static async criar({ vehicleId, clientId, sellerId, finalPrice, paymentMethod, notes }) {
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            const vehicleCheck = await client.query(
                'SELECT id, status, brand, model FROM vehicles WHERE id = $1 FOR UPDATE',
                [vehicleId]
            );

            if (vehicleCheck.rows.length === 0) {
                throw new Error('Veículo não encontrado');
            }

            if (vehicleCheck.rows[0].status !== 'disponivel') {
                throw new Error(`Veículo não está disponível. Status atual: ${vehicleCheck.rows[0].status}`);
            }

            const existingSale = await client.query(
                "SELECT id FROM sales WHERE vehicle_id = $1 AND status IN ('em_andamento', 'concluida')",
                [vehicleId]
            );

            if (existingSale.rows.length > 0) {
                throw new Error('Já existe uma venda ativa para este veículo');
            }

            await client.query(
                "UPDATE vehicles SET status = 'reservado' WHERE id = $1",
                [vehicleId]
            );

            const insertSql = `
                INSERT INTO sales (vehicle_id, client_id, seller_id, final_price, payment_method, notes, status)
                VALUES ($1, $2, $3, $4, $5, $6, 'em_andamento')
                RETURNING id, vehicle_id, client_id, seller_id, final_price, payment_method, status, notes, created_at
            `;

            const result = await client.query(insertSql, [
                vehicleId,
                clientId,
                sellerId,
                finalPrice,
                paymentMethod || null,
                notes || null
            ]);

            await client.query('COMMIT');
            
            return {
                ...result.rows[0],
                vehicle: vehicleCheck.rows[0]
            };

        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }

    static async concluir(id, paymentMethod) {
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            const saleCheck = await client.query(
                'SELECT id, vehicle_id, status FROM sales WHERE id = $1 FOR UPDATE',
                [id]
            );

            if (saleCheck.rows.length === 0) {
                throw new Error('Venda não encontrada');
            }

            if (saleCheck.rows[0].status !== 'em_andamento') {
                throw new Error(`Venda não pode ser concluída. Status atual: ${saleCheck.rows[0].status}`);
            }

            await client.query(
                "UPDATE vehicles SET status = 'vendido' WHERE id = $1",
                [saleCheck.rows[0].vehicle_id]
            );

            const updateSql = `
                UPDATE sales 
                SET status = 'concluida', 
                    payment_method = COALESCE($2, payment_method),
                    updated_at = NOW()
                WHERE id = $1
                RETURNING id, vehicle_id, client_id, seller_id, final_price, payment_method, status, notes, created_at, updated_at
            `;

            const result = await client.query(updateSql, [id, paymentMethod]);

            await client.query('COMMIT');
            return result.rows[0];

        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }

    static async cancelar(id, motivo) {
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            const saleCheck = await client.query(
                'SELECT id, vehicle_id, status FROM sales WHERE id = $1 FOR UPDATE',
                [id]
            );

            if (saleCheck.rows.length === 0) {
                throw new Error('Venda não encontrada');
            }

            if (saleCheck.rows[0].status === 'cancelada') {
                throw new Error('Venda já está cancelada');
            }

            if (saleCheck.rows[0].status === 'concluida') {
                throw new Error('Venda concluída não pode ser cancelada');
            }

            await client.query(
                "UPDATE vehicles SET status = 'disponivel' WHERE id = $1",
                [saleCheck.rows[0].vehicle_id]
            );

            const updateSql = `
                UPDATE sales 
                SET status = 'cancelada', 
                    notes = COALESCE(notes || ' | ', '') || 'CANCELAMENTO: ' || $2,
                    updated_at = NOW()
                WHERE id = $1
                RETURNING id, vehicle_id, client_id, seller_id, final_price, payment_method, status, notes, created_at, updated_at
            `;

            const result = await client.query(updateSql, [id, motivo || 'Sem motivo informado']);

            await client.query('COMMIT');
            return result.rows[0];

        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }

    static async remover(id) {
        return await this.cancelar(id, 'Removido pelo sistema');
    }
}
