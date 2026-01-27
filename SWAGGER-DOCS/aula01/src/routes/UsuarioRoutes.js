import express from 'express';
import { UsuarioController } from '../controllers/UsuarioController.js';

const router = express.Router();
/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Lista Usuarios
 *     tags: [Usuarios]
 *     responses:
 *      200:
 *       description: Lista de usuários retornada com sucesso. 
*/
router.get('/', UsuarioController.listarUsuarios);

router.get('/:id', UsuarioController.buscarUsuarioPorId);
router.post('/', UsuarioController.criarUsuario);
router.put('/:id', UsuarioController.atualizarUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);

export default router;