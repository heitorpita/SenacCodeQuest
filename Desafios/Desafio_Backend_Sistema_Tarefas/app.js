import express from 'express';
import "dotenv/config";
import Routes from "./src/routes/Routes.js"

const app = express();
const port = process.env.PORT


app.use(express.json())

app.use("/Rotas", Routes);

app.listen(port, () => { console.log(`Aplicacao rodando na porta http://localhost:${port}`) });
