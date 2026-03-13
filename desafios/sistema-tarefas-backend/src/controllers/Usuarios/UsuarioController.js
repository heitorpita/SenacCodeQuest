import UsuarioModel from "../../models/Usuarios/UsuarioModel.js";
import axios from "axios";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export default class UsuarioController {

    static async criar(req, res){
        try {
            const { nome, email, senha, cep} = req.body;
            if(!nome || !email || !senha || !cep ) {
                res.status(400).json({msg: "Dados inválidos (Bad Request)"});
                return
            }
            const senhaHash = await bcrypt.hash(senha, parseInt(process.env.SALT));

            const buscaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (buscaCep.erro){
                res.status(400).json({msg: "CEP INVALIDO (Bad Request)"});
                return
            }
            
            const novoUser = {

                id: uuidv4(),
                nome: nome,
                email: email,
                senha: senhaHash,
                cep: cep,
            }
            const userCriado = UsuarioModel.criar(novoUser);
            res.status(201).json(userCriado);
        } catch (error) {
            res.status(500).json({msg: "Erro ao criar Usuario", erro: error.message})
        }


    }

    static async login(req, res){
        try {
            const { email, senha } = req.body;
            if (!email || !senha) {
                res.status(400).json({msg: "Todos os campos devem ser preenchidos"})
                return;
            }
            const usuario = UsuarioModel.listar().find(u => u.email === email)
            if (!usuario) {
                res.status(400).json({msg: "Usuario nao encontrado"})
                return;
            }
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if(!senhaValida){
                res.status(400).json({msg: "Email ou Senha Invalidos"})
                return;
            }   
            const token = jwt.sign(
                {id: usuario.id, email: usuario.email, nome: usuario.nome},
                process.env.JWT_SECRET,
                { expiresIn: "1h"}
            );

            res.status(200).json({msg: "Login Feito com Sucesso", token})
        } catch (error) {
            res.status(500).json({msg: "Erro ao fazer login", erro: error.message})
        }
    }

   static perfil(req, res){
    try {
        const usuario = req.usuario;

        if(!usuario){
            return res.status(400).json({msg: "nenhum dado de usuario para exibir"});
        }

        return res.status(200).json({
            msg: "Dados do usuário",
            usuario: usuario
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Erro interno ao exibir os dados do user",
            erro: error.message
        });
    }
}


    


}