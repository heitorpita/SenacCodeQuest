import { UsuarioModel } from "../models/UsuarioModel.js";

export class UsuarioController {

    static listarUsuarios(req, res) {
        try {
            const usuarios = UsuarioModel.listarUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao listar usuários." });
        }
    }

    static buscarUsuarioPorId(req, res) {
        try {
            const id = req.params.id;
            const user = UsuarioModel.buscarUsuarioPorId(id);

            if (!user) {
                return res.status(404).json({ msg: "Usuário não encontrado." });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar usuário.", erro: error });
        }
    }

    static criarUsuario(req, res) {
        try {
            const { nome, email, telefone } = req.body;

            if (!nome || !email || !telefone) {
                return res.status(400).json({ msg: "Dados incompletos para criar usuário." });
            }

            const novoUsuario = UsuarioModel.criarUsuario({ nome, email, telefone });
            res.status(201).json(novoUsuario);

        } catch (error) {
            res.status(500).json({ msg: "Erro ao criar usuário.", erro: error });
        }
    }

    static atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, telefone } = req.body;

            if (!nome || !email || !telefone) {
                return res.status(400).json({ msg: "Dados incompletos para atualizar usuário." });
            }

            const userAtualizado = UsuarioModel.atualizarUsuario(id, nome, email, telefone);

            if (!userAtualizado) {
                return res.status(404).json({ msg: "Usuário não encontrado para atualização." });
            }

            res.status(200).json(userAtualizado);

        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar usuário.", erro: error });
        }
    }

    static deletarUsuario(req, res) {
        try {
            const { id } = req.params;
            const userDeletado = UsuarioModel.deletarUsuario(id);

            if (!userDeletado) {
                return res.status(404).json({ msg: "Usuário não encontrado para deleção." });
            }

            res.status(200).json({ msg: "Usuário deletado com sucesso." });

        } catch (error) {
            res.status(500).json({ msg: "Erro ao deletar usuário.", erro: error });
        }
    }
}
