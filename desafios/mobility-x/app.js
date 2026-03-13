import express from "express";
import "dotenv/config";
import UsuarioRoutes from "./src/modules/User/Route/userRoute.js";
import ClientRoutes from "./src/modules/Cliente/Route/clienteRoute.js";
import VeiculoRoutes from "./src/modules/Veiculos/Route/veiculoRoute.js";
import VendasRoutes from "./src/modules/Vendas/Route/vendasRoute.js";
import PagamentoRoutes from "./src/modules/Pagamentos/Route/pagamentoRoute.js";
import sequelize from "./src/db/config.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || "development"
    });
});

app.use("/user", UsuarioRoutes);
app.use("/client", ClientRoutes);
app.use("/veiculos", VeiculoRoutes);
app.use("/vendas", VendasRoutes);
app.use("/", PagamentoRoutes);

app.use((req, res) => {
    res.status(404).json({ msg: "Rota não encontrada" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ 
        msg: "Erro interno do servidor",
        erro: process.env.NODE_ENV === "development" ? err.message : undefined
    });
});

app.listen(port, async () => {
    await sequelize.sync({ force: true, alter: true });
    console.log(`🚗 MobilityX rodando em http://localhost:${port}`);
    console.log(`📋 Healthcheck: http://localhost:${port}/health`);
});