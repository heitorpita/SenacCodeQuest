import express from "express";
import UsuarioController from "../controllers/Usuarios/UsuarioController.js";
import TarefaController from "../controllers/Tarefas/TarefaController.js";
import { authenticator } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Usuários (públicas)
router.post("/auth/login", UsuarioController.login);
router.post("/auth/registro", UsuarioController.criar);

// Perfil (privada)
router.get("/auth/perfil", authenticator, UsuarioController.perfil);

// Tarefas (privadas)
router.get("/tarefas", authenticator, TarefaController.listar);
router.post("/tarefas", authenticator, TarefaController.criar);
router.get("/tarefas/:id", authenticator, TarefaController.buscarPorId);
router.put("/tarefas/:id", authenticator, TarefaController.atualizar);
router.delete("/tarefas/:id", authenticator, TarefaController.deletar);

export default router;
