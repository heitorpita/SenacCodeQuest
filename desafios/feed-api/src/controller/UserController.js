import UserModel from "../models/UserModel.js";

export default class UserController {

    static async listar(req, res) {
        try {
            const users = await UserModel.listar();
            if (!users || users.length === 0) {
                res.status(404).json({ msg: "Nenhum usuário encontrado" });
                return;
            }
            res.status(200).json({ msg: "Lista de usuários", users: users });
        } catch (error) {
            res.status(500).json(
                {
                    error: error.message,
                    msg: "Erro ao listar usuários"
                });
        }
    }

    static async criar(req, res) {
        try {
            const { name, email, role } = req.body;
            if (!name || !email) {
                res.status(400).json({ msg: "Nome e email são obrigatórios" });
                return;
            }

            // Verifica se email já existe
            const emailExistente = await UserModel.buscarPorEmail(email);
            if (emailExistente) {
                res.status(400).json({ msg: "Email já cadastrado" });
                return;
            }

            const dados = { name, email };
            if (role && ['ALUNO', 'ADMIN'].includes(role)) {
                dados.role = role;
            }

            const novoUser = await UserModel.criar(dados);
            res.status(201).json(
                {
                    msg: "Usuário criado com sucesso",
                    user: novoUser
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao criar usuário",
                    error: error.message
                });
        }

    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const user = await UserModel.buscarPorId(id);
            if (!user) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }
            res.status(200).json({ msg: "Usuário encontrado", user: user });
        } catch (error) {
            res.status(500).json(
                {
                    error: error.message,
                    msg: "Erro ao buscar usuário por ID"
                });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { name, email, role } = req.body;
            const userExistente = await UserModel.buscarPorId(id);
            if (!userExistente) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            // Verifica se email já existe em outro usuário
            if (email && email !== userExistente.email) {
                const emailExistente = await UserModel.buscarPorEmail(email);
                if (emailExistente) {
                    res.status(400).json({ msg: "Email já cadastrado" });
                    return;
                }
            }

            const dados = {};
            if (name) dados.name = name;
            if (email) dados.email = email;
            if (role && ['ALUNO', 'ADMIN'].includes(role)) dados.role = role;

            const userAtualizados = await UserModel.atualizar(id, dados);
            res.status(200).json(
                {
                    msg: "Usuário atualizado com sucesso",
                    user: userAtualizados
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    error: error.message,
                    msg: "Erro ao atualizar usuário"
                });
        }

    }

    static async deletar(req, res) {

        try {
            const { id } = req.params;
            const userExistente = await UserModel.buscarPorId(id);
            if (!userExistente) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }
            await UserModel.deletar(id);
            res.status(200).json(
                {
                    msg: "Usuário deletado com sucesso"
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    error: error.message,
                    msg: "Erro ao deletar usuário"
                });
        }


    }





}
