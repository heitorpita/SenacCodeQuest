import VeiculoController from "../Controller/veiculoController.js"
import express from "express";
import { authenticator } from "../../../middlewares/authMiddleware.js";
import { perfispermitidos } from "../../../middlewares/autorizationMiddleware.js";

const router = express.Router();

router.use(authenticator);

router.get("/disponiveis", perfispermitidos(["admin", "seller", "cliente"]), VeiculoController.listarDisponiveis);

router.get("/", perfispermitidos(["admin", "seller"]), VeiculoController.listar);

router.get("/:id", perfispermitidos(["admin", "seller", "cliente"]), VeiculoController.buscarPorId);

router.post("/", perfispermitidos(["admin", "seller"]), VeiculoController.register);

router.put("/:id", perfispermitidos(["admin", "seller"]), VeiculoController.atualizar);

router.delete("/:id", perfispermitidos(["admin"]), VeiculoController.remover);

export default router;