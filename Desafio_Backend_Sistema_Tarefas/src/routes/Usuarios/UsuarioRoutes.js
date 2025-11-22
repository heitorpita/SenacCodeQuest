import UsuarioController from "../../controllers/Usuarios/UsuarioController.js";
import { authenticator } from "../../middlewares/authMiddleware.js";
import express from "express";
const router = express.Router();

router.post("/login", UsuarioController.login);
router.post("/", UsuarioController.criar)

//rota privada
router.get("/perfil/dados", authenticator, UsuarioController.perfil);

export default router;