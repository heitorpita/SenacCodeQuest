import express from 'express';
import "dotenv/config"

const app = express();
const port = process.env.PORT


app.get("/", (req, res) => {
    res.json({msg: "api funcionando"})
})

app.listen(port, async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    } catch (error) {
        console.error("Erro ao sincronizar banco:", error.message);
    }
});