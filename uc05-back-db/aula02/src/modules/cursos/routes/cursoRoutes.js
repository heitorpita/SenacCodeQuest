import { Router } from "express";
import CursoController from "../controllers/CursoController.js";

const router = Router();

router.post("/", CursoController.criar);
router.get("/", CursoController.listar);
router.get("/:id", CursoController.buscarPorId);
router.put("/:id", CursoController.atualizar);
router.delete("/:id", CursoController.deletar);

export default router;