import express from 'express';
import PostController from '../controller/PostController.js';
import { authenticator } from '../middleware/authMiddleware.js';
import { autorization } from '../middleware/autorizationMiddleware.js';

const router = express.Router();

// Rotas públicas 
router.get('/', PostController.listar);
router.get('/feed', PostController.feed);
router.get('/:id', PostController.buscarPorId);

// Rotas protegidas 
router.post('/', authenticator, autorization.todos, PostController.criar);
router.put('/:id', authenticator, autorization.todos, PostController.atualizar);
router.delete('/:id', authenticator, autorization.todos, PostController.deletar);

export default router;
