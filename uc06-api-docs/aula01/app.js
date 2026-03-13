import express from "express";
import "dotenv/config";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "./src/docs/swagger.js"; //usando jsdocs
import usuarioRoutes from "./src/routes/UsuarioRoutes.js";

//usando o arquivo yaml
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//usando jsdocs
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//usando yaml
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/usuarios", usuarioRoutes);


app.get("/", (req, res)=>{
    res.status(200).send("Api - Users");
});

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando em http://localhost:${PORT}`);
})