import express from 'express';
import UserController from '../controller/UserController.js';
const router = express.Router();

router.get('/', UserController.listar);
router.post('/', UserController.criar);
router.get('/:id', UserController.buscarPorId);
router.put('/:id', UserController.atualizar);
router.delete('/:id', UserController.deletar);

export default router;