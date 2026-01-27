import ClienteController from "../Controller/clienteController.js";
import express from "express";
import { authenticator } from "../../../middlewares/authMiddleware.js";
import { perfispermitidos } from "../../../middlewares/autorizationMiddleware.js";

const router = express.Router();

router.use(authenticator);

router.get("/", perfispermitidos(["admin", "seller"]), ClienteController.listar);

router.get("/:id", perfispermitidos(["admin", "seller"]), ClienteController.buscarPorId);

router.post("/", perfispermitidos(["admin", "seller"]), ClienteController.register);

router.put("/:id", perfispermitidos(["admin", "seller"]), ClienteController.atualizar);

router.delete("/:id", perfispermitidos(["admin"]), ClienteController.remover);

export default router;