import express from 'express';
import "dotenv/config";
import UsuarioRoutes from "./src/routes/Usuarios/UsuarioRoutes.js"

const app = express();
const port = process.env.PORT


app.use(express.json())

app.use("/Usuarios", UsuarioRoutes);

app.listen(port, () => { console.log(`Aplicacao rodando na porta http://localhost:${port}`) });
