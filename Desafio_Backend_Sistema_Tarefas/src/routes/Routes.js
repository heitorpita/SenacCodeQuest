import TarefaController from "../controllers/Tarefas/TarefaController.js";
import UsuarioController from "../controllers/Usuarios/UsuarioController.js";
import { authenticator } from "../middlewares/authMiddleware.js";
import express from "express";
const router = express.Router();

router.post("/login", UsuarioController.login);
router.post("/", UsuarioController.criar)

//rota privada
router.get("/perfil/dados", authenticator, UsuarioController.perfil);

//tarefas

router.get("/listar", authenticator, TarefaController.listar)
router.post("/criarTarefa", authenticator, TarefaController.criar)
router.get("/listar:id", authenticator, TarefaController.buscarPorId)
router.put("/listar:id", authenticator, TarefaController.atualizar)
router.delete("/listar:id:", authenticator, TarefaController.deletar)

export default router;