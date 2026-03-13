import Usuario from "../models/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

export default class UsuarioController {

    static async criar(req, res) {
        try {
            const { nome, email, password, role, matricula } = req.body;

            if(!nome || !email || !password || !matricula) {
                return res.status(400).json({ msg: "Nome, email, senha e matrícula são obrigatórios" });
            }

            const usuarioExiste = await Usuario.findOne({ where: { email } });
            if (usuarioExiste) {
                return res.status(409).json({ msg: "Email já cadastrado" });
            }

            const senhaHash = await bcrypt.hash(password, 10);

            const usuario = await Usuario.create({
                nome,
                email,
                role: role || 'client',
                matricula,
                password: senhaHash
            });

            const { password: _, ...usuarioSemSenha } = usuario.toJSON();
            return res.status(201).json(usuarioSemSenha);

        } catch (error) {
            return res.status(500).json({ msg: "Erro ao criar usuário", erro: error.message });
        }
    }

    static async listar(req, res) {
        try {
            const users = await Usuario.findAll({
                attributes: { exclude: ['password'] }
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao listar usuários", erro: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id, {
                attributes: { exclude: ['password'] }
            });

            if (!usuario) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            }

            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao buscar usuário", erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, password, role, matricula } = req.body;

            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            }

            if (email && email !== usuario.email) {
                const emailExiste = await Usuario.findOne({ where: { email } });
                if (emailExiste) {
                    return res.status(409).json({ msg: "Email já está em uso" });
                }
            }

            const dadosAtualizacao = {};
            if (nome) dadosAtualizacao.nome = nome;
            if (email) dadosAtualizacao.email = email;
            if (role) dadosAtualizacao.role = role;
            if (matricula) dadosAtualizacao.matricula = matricula;
            if (password) dadosAtualizacao.password = await bcrypt.hash(password, 10);

            await usuario.update(dadosAtualizacao);

            const { password: _, ...usuarioSemSenha } = usuario.toJSON();
            return res.status(200).json(usuarioSemSenha);
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao atualizar usuário", erro: error.message });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findOne({ where: { id } });
            
            if (!usuario) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            }

            await usuario.destroy();
            return res.status(200).json({ msg: "Usuário deletado com sucesso!" });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao deletar usuário", erro: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({ msg: "Email e senha são obrigatórios" });
            }

            const usuario = await Usuario.findOne({ where: { email } });
            if (!usuario) {
                return res.status(404).json({ msg: "Usuário não encontrado" });
            }

            const senhaValida = await bcrypt.compare(password, usuario.password);
            if (!senhaValida) {
                return res.status(401).json({ msg: "Senha inválida" });
            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    email: usuario.email,
                    role: usuario.role
                },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            return res.status(200).json({ 
                msg: "Login realizado com sucesso!", 
                token,
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    role: usuario.role
                }
            });
        } catch (error) {
            return res.status(500).json({ msg: "Erro ao fazer login", erro: error.message });
        }
    }

    static async criarAdmin(req, res){
        try {
            const senhaHash = await bcrypt.hash(process.env.SENHA_SUPER_ADMIN, 10);
            await Usuario.create({
                nome: process.env.NOME_SUPER_ADMIN,
                email: process.env.EMAIL_SUPER_ADMIN,
                role: "admin",
                email: process.env.EMAIL_SUPER_ADMIN,
                matricula: process.env.MATRICULA_SUPER_ADMIN,
                password: senhaHash
            })
            if(!nome || !matricula || !email || !password ) {
                return res.status(400).json({ msg: "Nome, email, senha e matrícula são obrigatórios" });
        } 
        return res.status(201).json({ msg: "Usuário admin criado com sucesso!" });
    }
        catch (error) {
            res.status(500).json({ msg: "Erro ao criar usuário admin", erro: error.message });
        }
    

}
    }