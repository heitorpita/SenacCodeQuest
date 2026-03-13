import express from 'express';
import CommentController from '../controller/CommentController.js';
import { authenticator } from '../middleware/authMiddleware.js';
import { autorization } from '../middleware/autorizationMiddleware.js';

const router = express.Router();

// Rotas públicas 
router.get('/', CommentController.listar);
router.get('/:id', CommentController.buscarPorId);

// Rotas protegidas (
router.post('/', authenticator, autorization.todos, CommentController.criar);
router.put('/:id', authenticator, autorization.todos, CommentController.atualizar);
router.delete('/:id', authenticator, autorization.todos, CommentController.deletar);

export default router;
