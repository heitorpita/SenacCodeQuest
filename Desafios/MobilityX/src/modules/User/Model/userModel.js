import { query, pool } from "../../../db/db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;

export default class UsuarioModel {


  static async listar() {
    const sql = `
      SELECT 
        id,
        name,
        email,
        role,
        created_at
      FROM users
      ORDER BY created_at DESC
    `;

    const result = await query(sql, []);
    return result.rows;
  }

  static async buscarPorId(id) {
    const sql = `
      SELECT
        id,
        name,
        email,
        role,
        created_at
      FROM users
      WHERE id = $1
    `;

    const result = await query(sql, [id]);
    return result.rows[0];
  }

  static async buscarPerfilCompleto(id) {
    const sql = `
      SELECT
        u.id,
        u.name,
        u.email,
        u.role,
        u.created_at,
        c.id as client_id,
        c.name as client_name,
        c.document as client_document,
        c.email as client_email,
        c.phone as client_phone
      FROM users u
      LEFT JOIN clients c ON c.usuario_id = u.id
      WHERE u.id = $1
    `;

    const result = await query(sql, [id]);
    return result.rows[0];
  }


  static async buscarComSenhaPorEmail(email) {
    const sql = `
      SELECT
        id,
        name,
        email,
        password_hash,
        role
      FROM users
      WHERE email = $1
    `;

    const result = await query(sql, [email]);
    return result.rows[0];
  }

  static async criar({ name, email, password, role }) {
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const sql = `
      INSERT INTO users (name, email, password_hash, role)
      VALUES ($1, $2, $3, $4)
      RETURNING
        id,
        name,
        email,
        role,
        created_at
    `;

    const result = await query(sql, [
      name,
      email,
      passwordHash,
      role || 'seller'
    ]);

    return result.rows[0];
  }

  static async criarUsuarioCliente({ name, email, password, document, phone }) {
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');

      const emailCheck = await client.query(
        'SELECT id FROM users WHERE email = $1',
        [email]
      );
      if (emailCheck.rows.length > 0) {
        throw new Error('Email já cadastrado');
      }

      const docCheck = await client.query(
        'SELECT id FROM clients WHERE document = $1',
        [document]
      );
      if (docCheck.rows.length > 0) {
        throw new Error('Documento já cadastrado');
      }

      const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
      const userResult = await client.query(
        `INSERT INTO users (name, email, password_hash, role)
         VALUES ($1, $2, $3, 'cliente')
         RETURNING id, name, email, role, created_at`,
        [name, email, passwordHash]
      );
      const user = userResult.rows[0];

      const clientResult = await client.query(
        `INSERT INTO clients (name, document, email, phone, usuario_id)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, usuario_id, name, document, email, phone, created_at`,
        [name, document, email, phone, user.id]
      );
      const clientData = clientResult.rows[0];

      await client.query('COMMIT');

      return {
        user,
        client: clientData
      };

    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  static async atualizar(id, { name, email }) {
    const sql = `
      UPDATE users
      SET name = $1, email = $2
      WHERE id = $3
      RETURNING id, name, email, role, created_at
    `;

    const result = await query(sql, [name, email, id]);
    return result.rows[0];
  }

  static async atualizarSenha(id, novaSenha) {
    const passwordHash = await bcrypt.hash(novaSenha, SALT_ROUNDS);
    
    const sql = `
      UPDATE users
      SET password_hash = $1
      WHERE id = $2
      RETURNING id, name, email, role
    `;

    const result = await query(sql, [passwordHash, id]);
    return result.rows[0];
  }

  static async remover(id) {
    const sql = `DELETE FROM users WHERE id = $1`;
    await query(sql, [id]);
  }

  static async removerUsuarioCliente(userId) {
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');

      const clientResult = await client.query(
        'SELECT id FROM clients WHERE usuario_id = $1',
        [userId]
      );

      if (clientResult.rows.length > 0) {
        const clientId = clientResult.rows[0].id;

        const salesCheck = await client.query(
          "SELECT id FROM sales WHERE client_id = $1 AND status = 'em_andamento'",
          [clientId]
        );

        if (salesCheck.rows.length > 0) {
          throw new Error('Não é possível excluir conta com vendas em andamento. Cancele ou conclua as vendas primeiro.');
        }
      }

      await client.query('DELETE FROM users WHERE id = $1', [userId]);

      await client.query('COMMIT');
      return true;

    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}
