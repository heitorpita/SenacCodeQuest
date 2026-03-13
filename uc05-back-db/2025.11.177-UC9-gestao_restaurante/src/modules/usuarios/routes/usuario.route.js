import express from 'express';
import UsuarioController from "../controllers/usuario.controller.js"
import { authenticator } from "../../../middleware/authMiddleware.js";
import { autorization } from "../../../middleware/autorizationMiddleware.js";

const router = express.Router();

// Rotas públicas
router.post('/', UsuarioController.criar);           
router.post('/login', UsuarioController.login);      

// Rotas privada
router.get('/', authenticator, autorization.admin, UsuarioController.listar);           
router.get('/:id', authenticator, UsuarioController.buscarPorId);                        
router.put('/:id', authenticator, UsuarioController.atualizar);                          
router.delete('/:id', authenticator, autorization.admin, UsuarioController.deletar);    

export default router;