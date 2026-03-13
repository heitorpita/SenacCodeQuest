import VendasController from "../Controller/vendasController.js";
import express from "express";
import { authenticator } from "../../../middlewares/authMiddleware.js";
import { perfispermitidos } from "../../../middlewares/autorizationMiddleware.js";

const router = express.Router();

router.use(authenticator);

router.post("/", perfispermitidos(["admin", "seller", "cliente"]), VendasController.register);

router.get("/", perfispermitidos(["admin", "seller", "cliente"]), VendasController.listar);

router.get("/:id", perfispermitidos(["admin", "seller", "cliente"]), VendasController.buscarPorId);

router.patch("/:id/concluir", perfispermitidos(["admin", "seller", "cliente"]), VendasController.concluir);

router.patch("/:id/cancelar", perfispermitidos(["admin", "seller", "cliente"]), VendasController.cancelar);

router.delete("/:id", perfispermitidos(["admin"]), VendasController.deletar);

export default router;
