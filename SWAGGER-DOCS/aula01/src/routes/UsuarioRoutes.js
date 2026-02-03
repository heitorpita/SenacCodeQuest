import express from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

const router = express.Router();

/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Listar Usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Usuários encontrados
 */
router.get("/", UsuarioController.listarUsuarios);


/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Cria um usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Joel"
 *             email: "joel@email.com"
 *             telefone: "(84) 4002-8922"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Todos os campos devem ser preenchidos
 */

router.post("/", UsuarioController.criarUsuario);

/**
 * @openapi
 * /usuarios/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário encontrado.
 *         content:
 *           application/json:
 *             example:
 *               msg: Usuário encontrado
 *               usuario:
 *                 id: 1
 *                 nome: "Amanda"
 *                 email: "amanda@email.com"
 *                 telefone: "(84) 9999-9999"
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", UsuarioController.buscarUsuarioPorId);



/**
 * @openapi
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: "Joel"
 *             email: "joel@email.com"
 *             telefone: "(84) 4002-8922"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Todos os campos devem ser preenchidos
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno ao atualizar usuário
 */
router.put("/:id", UsuarioController.atualizarUsuario);

/**
 * @openapi
 * /usuarios/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno ao deletar o usuário
 */
router.delete("/:id", UsuarioController.deletarUsuario);

export default router;