import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

// Middleware de autenticação JWT (opcional - para uso futuro)
export function authenticatorJWT(req, res, next){
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(" ")[1];

    if(!token){
        res.status(401).json({msg: "ACESSO NEGADO - Token não fornecido"});
        return;
    }
    try {
        const usuario = jwt.verify(token, process.env.JWT_SECRET);
        req.user = usuario;
        req.userId = usuario.id;
        req.userRole = usuario.role;
        next();
    } catch (error) {
        res.status(403).json({msg: "Token inválido", erro: error.message});
    }
}

// Middleware de autenticação simulada com header x-user-id
export async function authenticator(req, res, next){
    const userId = req.headers["x-user-id"];

    if(!userId){
        res.status(401).json({msg: "ACESSO NEGADO - Header x-user-id é obrigatório"});
        return;
    }

    try {
        // Verifica se o usuário existe
        const user = await UserModel.buscarPorId(userId);
        if (!user) {
            res.status(401).json({msg: "Usuário não encontrado"});
            return;
        }

        // Adiciona informações do usuário na requisição
        req.userId = user.id;
        req.userRole = user.role;
        req.user = user;

        next();
    } catch (error) {
        res.status(500).json({msg: "Erro na autenticação", erro: error.message});
    }
}