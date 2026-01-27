import express from "express"
import UsuarioController from "../controllers/usuarioController.js"
const router = express.Router();

router.get("/", UsuarioController.listar);
router.post("/", UsuarioController.criar);

export default router;