import PagamentoController from "../Controller/pagamentoController.js";
import express from "express";
import { authenticator } from "../../../middlewares/authMiddleware.js";
import { perfispermitidos } from "../../../middlewares/autorizationMiddleware.js";

const router = express.Router();

router.use(authenticator);

router.post(
    "/vendas/:sale_id/pagamentos", 
    perfispermitidos(["admin", "seller", "cliente"]), 
    PagamentoController.registrar
);

router.get(
    "/vendas/:sale_id/pagamentos", 
    perfispermitidos(["admin", "seller", "cliente"]), 
    PagamentoController.listarPorVenda
);

export default router;
