//4 arquivo a ser criado
import UsuarioController from "../controllers/UsuarioController.js";
import express from "express";
const router = express.Router();

router.get("/", UsuarioController.listar);

export default router;