import { query } from "../../../db/db.js";

export default class AuditoriaModel {

  static async registrar({ userId, action, resource, resourceId, payload }) {
    const sql = `
      INSERT INTO audit_logs (user_id, action, resource, resource_id, payload)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, user_id, action, resource, resource_id, payload, created_at
    `;

    const result = await query(sql, [
      userId,
      action,
      resource,
      resourceId,
      JSON.stringify(payload)
    ]);

    return result.rows[0];
  }

  static async listar({ userId, resource, resourceId, limit = 100 } = {}) {
    let sql = `
      SELECT 
        al.id,
        al.user_id,
        u.name as user_name,
        al.action,
        al.resource,
        al.resource_id,
        al.payload,
        al.created_at
      FROM audit_logs al
      LEFT JOIN users u ON u.id = al.user_id
      WHERE 1=1
    `;
    
    const params = [];
    let paramIndex = 1;

    if (userId) {
      sql += ` AND al.user_id = $${paramIndex++}`;
      params.push(userId);
    }

    if (resource) {
      sql += ` AND al.resource = $${paramIndex++}`;
      params.push(resource);
    }

    if (resourceId) {
      sql += ` AND al.resource_id = $${paramIndex++}`;
      params.push(resourceId);
    }

    sql += ` ORDER BY al.created_at DESC LIMIT $${paramIndex}`;
    params.push(limit);

    const result = await query(sql, params);
    return result.rows;
  }

  static async buscarPorRecurso(resource, resourceId) {
    const sql = `
      SELECT 
        al.id,
        al.user_id,
        u.name as user_name,
        al.action,
        al.resource,
        al.resource_id,
        al.payload,
        al.created_at
      FROM audit_logs al
      LEFT JOIN users u ON u.id = al.user_id
      WHERE al.resource = $1 AND al.resource_id = $2
      ORDER BY al.created_at DESC
    `;

    const result = await query(sql, [resource, resourceId]);
    return result.rows;
  }
}
