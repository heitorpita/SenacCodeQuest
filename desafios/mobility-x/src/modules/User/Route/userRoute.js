import UsuarioController from "../Controller/userController.js";
import express from "express";
import { authenticator } from "../../../middlewares/authMiddleware.js";
import { perfispermitidos } from "../../../middlewares/autorizationMiddleware.js";

const router = express.Router();

router.post("/register", UsuarioController.register);

router.post("/register/cliente", UsuarioController.registerCliente);

router.post("/login", UsuarioController.login);

router.use(authenticator);

router.get("/me", perfispermitidos(["admin", "seller", "cliente"]), UsuarioController.meuPerfil);

router.put("/me", perfispermitidos(["admin", "seller", "cliente"]), UsuarioController.atualizarMeuPerfil);

router.patch("/me/senha", perfispermitidos(["admin", "seller", "cliente"]), UsuarioController.alterarSenha);

router.delete("/me", perfispermitidos(["cliente"]), UsuarioController.excluirMinhaConta);

router.get("/", perfispermitidos(["admin"]), UsuarioController.listar);

router.delete("/:id", perfispermitidos(["admin"]), UsuarioController.remover);

export default router;