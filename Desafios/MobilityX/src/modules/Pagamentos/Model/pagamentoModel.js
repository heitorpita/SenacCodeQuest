import { query } from "../../../db/db.js";

export default class PagamentoModel {

    static async listarPorVenda(saleId) {
        const sql = `
            SELECT
                id,
                sale_id,
                amount,
                payment_method,
                created_at
            FROM payments
            WHERE sale_id = $1
            ORDER BY created_at DESC
        `;
        const result = await query(sql, [saleId]);
        return result.rows;
    }

    static async buscarPorId(id) {
        const sql = `
            SELECT
                id,
                sale_id,
                amount,
                payment_method,
                created_at
            FROM payments
            WHERE id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows[0];
    }

    static async totalPago(saleId) {
        const sql = `
            SELECT COALESCE(SUM(amount), 0) as total
            FROM payments
            WHERE sale_id = $1
        `;
        const result = await query(sql, [saleId]);
        return parseFloat(result.rows[0].total);
    }

    static async criar({ saleId, amount, paymentMethod }) {
        const sql = `
            INSERT INTO payments (sale_id, amount, payment_method)
            VALUES ($1, $2, $3)
            RETURNING id, sale_id, amount, payment_method, created_at
        `;
        const result = await query(sql, [saleId, amount, paymentMethod]);
        return result.rows[0];
    }

    static async remover(id) {
        const sql = `DELETE FROM payments WHERE id = $1`;
        await query(sql, [id]);
    }
}
