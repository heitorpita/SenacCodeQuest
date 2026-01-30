import express from "express";
import MesaController from "../controllers/mesa.controller.js";
import { authenticator } from "../../../middleware/authMiddleware.js";
import { autorization } from "../../../middleware/autorizationMiddleware.js";

const router = express.Router();


router.get("/", MesaController.listar);                  
router.get("/:id", MesaController.buscarPorId);         

router.post("/", authenticator, autorization.admin, MesaController.criar);        
router.put("/:id", authenticator, autorization.admin, MesaController.atualizar); 
router.delete("/:id", authenticator, autorization.admin, MesaController.deletar); 

export default router;