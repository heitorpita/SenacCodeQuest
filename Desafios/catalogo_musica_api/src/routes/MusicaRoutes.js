import express from "express";
import MusicaController from "../controllers/musicaController.js";
const Routes = express.Router();


Routes.get("/", MusicaController.listar)
Routes.get("/:id", MusicaController.buscarPorId)
Routes.get("/genero/:genero", MusicaController.buscarPorGenero)
Routes.post("/", MusicaController.criar)
Routes.put("/:id", MusicaController.atualizar)
Routes.delete("/:id", MusicaController.deletar)

export default Routes