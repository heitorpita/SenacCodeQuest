import express from 'express';
import "dotenv/config";
import usuarioRoutes from './src/modules/usuarios/routes/usuario.route.js';
import mesaRoutes from './src/modules/mesas/routes/mesa.route.js';
import cardapioRoutes from './src/modules/cardapio/routes/cardapio.route.js';
import sequelize from './src/config/db.js';
import  UsuarioController  from "./src/modules/usuarios/controllers/usuario.controller.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "API Gestão de Restaurantes funcionando!" });
});

app.post("/", UsuarioController.criarAdmin);

app.use("/user", usuarioRoutes);
app.use("/mesa", mesaRoutes);
app.use("/cardapio", cardapioRoutes);

app.listen(port, async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    } catch (error) {
        console.error("Erro ao sincronizar banco:", error.message);
    }
});