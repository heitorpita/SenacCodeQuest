import express from "express";
import "dotenv/config";
import alunoRoutes from "./src/routes/alunoRoutes.js";
import cursoRoutes from "./src/routes/cursoRoutes.js";
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/alunos", alunoRoutes);
app.use("/cursos", cursoRoutes);
app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})