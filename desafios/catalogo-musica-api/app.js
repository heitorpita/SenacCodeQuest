import express from "express";
import "dotenv/config";
import MusicaRoutes from "./src/routes/MusicaRoutes.js"

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/musicas", MusicaRoutes)


app.get("/", (req, res)=>{
    res.status(200).send(process.env.SAUDACAO);
})

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})
