import express from "express";
import CardapioController from "../controllers/cardapio.controller.js";
import { authenticator } from "../../../middleware/authMiddleware.js";
import { autorization } from "../../../middleware/autorizationMiddleware.js";

const router = express.Router();

// Rotas públicas
router.get("/", CardapioController.listar);             
router.get("/:id", CardapioController.buscarPorId);     

// Rotas privadas
router.post("/", authenticator, autorization.admin, CardapioController.criar);        
router.put("/:id", authenticator, autorization.admin, CardapioController.atualizar);  
router.delete("/:id", authenticator, autorization.admin, CardapioController.deletar); 

export default router;
