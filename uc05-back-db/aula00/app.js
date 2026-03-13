import express from express;
import "dotenv/config";
import UsuarioRoutes from "./src/routes/UsuarioRoutes.js"

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/usuarios", usuarioRoutes);

app.listen(port, () => console.log(`Aplicacao Rodando em http://localhost:${port}`))