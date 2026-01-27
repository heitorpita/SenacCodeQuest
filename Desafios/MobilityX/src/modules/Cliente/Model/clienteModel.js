import { query, pool } from "../../../db/db.js";


export default class ClienteModel {

    static async listar() {
        const sql = `
        SELECT 
        c.id,
        c.usuario_id,
        u.name as usuario_name,
        u.email as usuario_email,
        c.name,
        c.document,
        c.email,
        c.phone,
        c.created_at
      FROM clients c
      LEFT JOIN users u ON u.id = c.usuario_id
      ORDER BY c.created_at DESC
        `;
        const result = await query(sql, []);
        return result.rows
    }

    static async buscarPorId(id) {
        const sql = `
        SELECT 
            c.id,
            c.usuario_id,
            c.name,
            c.document,
            c.email,
            c.phone,
            c.created_at
        FROM clients c
        WHERE c.id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows[0];
    }

    static async buscarPorUsuarioId(usuarioId) {
        const sql = `
        SELECT 
            id,
            usuario_id,
            name,
            document,
            email,
            phone,
            created_at
        FROM clients
        WHERE usuario_id = $1
        `;
        const result = await query(sql, [usuarioId]);
        return result.rows[0];
    }


  static async criar({ name, document, email, phone, usuarioId = null }) {

    const sql = `
      INSERT INTO clients (name, document, email, phone, usuario_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING
        id,
        usuario_id,
        name,
        document,
        email,
        phone,
        created_at
    `;

    const result = await query(sql, [
      name,
      document,
      email,
      phone,
      usuarioId

    ]);

    return result.rows[0];
  }

    static async verificarEmail(email) {
    const sql = `
      SELECT
        id,
        name,
        email
      FROM clients
      WHERE email = $1
    `;

    const result = await query(sql, [email]);
    return result.rows[0];
  }


  static async verificarDocumentos(document){
    const sql = `
    SELECT
    id,
    name,
    document
    FROM clients 
    WHERE document = $1
    `;

    const result = await query(sql, [document]);
    return result.rows[0]
  }

    static async remover(id) {
        const sql = `DELETE FROM clients WHERE id = $1`;
        await query(sql, [id]);
    }


    static async atualizar(id, { name, document, email, phone }) {
        const sql = `
      UPDATE clients
      SET name = $1, document = $2, email = $3, phone = $4
      WHERE id = $5
      RETURNING
        id,
        usuario_id,
        name,
        document,
        email,
        phone,
        created_at
    `;
      const params = [name, document, email, phone, id]
      const result = await query(sql, params);
      return result.rows[0] ?? null ;
    }

    static async vincularUsuario(clientId, usuarioId) {
        const sql = `
          UPDATE clients
          SET usuario_id = $2
          WHERE id = $1
          RETURNING id, usuario_id, name, document, email, phone, created_at
        `;
        const result = await query(sql, [clientId, usuarioId]);
        return result.rows[0];
    }
  
  }


