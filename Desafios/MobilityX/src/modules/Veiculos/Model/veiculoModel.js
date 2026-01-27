import { query } from "../../../db/db.js";

export default class VeiculoModel{

    static async listar(){
        const sql = `
        SELECT
            id,
            brand,
            model,
            year, 
            price,
            status,
            created_at
        FROM vehicles
        ORDER BY created_at DESC
        `;
        const result = await query(sql, []);
        return result.rows;
    }

    static async listarDisponiveis(){
        const sql = `
        SELECT
            id,
            brand,
            model,
            year, 
            price,
            status,
            created_at
        FROM vehicles
        WHERE status = 'disponivel'
        ORDER BY created_at DESC
        `;
        const result = await query(sql, []);
        return result.rows;
    }

    static async buscarPorId(id){
        const sql = `
        SELECT
            id,
            brand,
            model,
            year,
            price,
            status,
            created_at
        FROM vehicles
        WHERE id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows[0];

    }

    static async criar({brand, model, year, price }) {
        const sql = `
            INSERT INTO vehicles (brand, model, year, price, status)
            VALUES ($1, $2, $3, $4, 'disponivel')
            RETURNING
            id,
            brand,
            model,
            year,
            price,
            status,
            created_at
        `;
        const result = await query(sql, [
            brand,
            model,
            year,
            price
        ]);
        return result.rows[0];
    }

    static async atualizar(id, {brand, model, year, price, status}) {
        const sql = `
            UPDATE vehicles
            SET brand = $1, model = $2, year = $3, price = $4, status = COALESCE($5, status)
            WHERE id = $6
            RETURNING id, brand, model, year, price, status, created_at
        `;
        const result = await query(sql, [brand, model, year, price, status, id]);
        return result.rows[0];
    }

    static async atualizarStatus(id, status) {
        const sql = `
            UPDATE vehicles
            SET status = $2
            WHERE id = $1
            RETURNING id, brand, model, year, price, status, created_at
        `;
        const result = await query(sql, [id, status]);
        return result.rows[0];
    }

    static async remover(id){
        const sql = `DELETE FROM vehicles WHERE id = $1`;
        await query(sql, [id]);
    }
    
}