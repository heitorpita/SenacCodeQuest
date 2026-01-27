import CommentModel from "../models/CommentModel.js";
import UserModel from "../models/UserModel.js";
import PostModel from "../models/PostModel.js";

export default class CommentController {

    static async listar(req, res) {
        try {
            const comments = await CommentModel.listar();
            if (!comments || comments.length === 0) {
                res.status(404).json({ msg: "Nenhum comentário encontrado" });
                return;
            }
            res.status(200).json({ msg: "Lista de comentários", comments: comments });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao listar comentários"
            });
        }
    }

    static async criar(req, res) {
        try {
            const { content, postId } = req.body;
            
            // Pega authorId do header x-user-id (autenticação simulada)
            const authorId = req.userId;

            // Validação dos campos obrigatórios
            if (!content || !postId) {
                res.status(400).json({ msg: "Conteúdo e postId são obrigatórios" });
                return;
            }

            if (!authorId) {
                res.status(401).json({ msg: "Header x-user-id é obrigatório" });
                return;
            }

            // Verifica se o post existe
            const postExistente = await PostModel.buscarPorId(postId);
            if (!postExistente) {
                res.status(404).json({ msg: "Post não encontrado" });
                return;
            }

            // Bloqueia comentários em posts rascunho
            if (postExistente.status === 'RASCUNHO') {
                res.status(400).json({ msg: "Não é permitido comentar em posts rascunho" });
                return;
            }

            // Verifica se o usuário existe
            const userExistente = await UserModel.buscarPorId(authorId);
            if (!userExistente) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            const novoComment = await CommentModel.criar({
                content,
                postId: Number(postId),
                authorId: Number(authorId)
            });
            res.status(201).json({
                msg: "Comentário criado com sucesso",
                comment: novoComment
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar comentário",
                error: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const comment = await CommentModel.buscarPorId(id);
            if (!comment) {
                res.status(404).json({ msg: "Comentário não encontrado" });
                return;
            }
            res.status(200).json({ msg: "Comentário encontrado", comment: comment });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao buscar comentário por ID"
            });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { content } = req.body;
            const userId = req.userId;
            const userRole = req.userRole;

            const commentExistente = await CommentModel.buscarPorId(id);
            if (!commentExistente) {
                res.status(404).json({ msg: "Comentário não encontrado" });
                return;
            }

            // Verifica se é o autor ou admin
            if (commentExistente.authorId !== Number(userId) && userRole !== 'ADMIN') {
                res.status(403).json({ msg: "Apenas o autor ou admin pode editar este comentário" });
                return;
            }

            const commentAtualizado = await CommentModel.atualizar(id, { content });
            res.status(200).json({
                msg: "Comentário atualizado com sucesso",
                comment: commentAtualizado
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao atualizar comentário"
            });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const userId = req.userId;
            const userRole = req.userRole;

            const commentExistente = await CommentModel.buscarPorId(id);
            if (!commentExistente) {
                res.status(404).json({ msg: "Comentário não encontrado" });
                return;
            }

            // Verifica se é o autor ou admin
            if (commentExistente.authorId !== Number(userId) && userRole !== 'ADMIN') {
                res.status(403).json({ msg: "Apenas o autor ou admin pode deletar este comentário" });
                return;
            }

            await CommentModel.deletar(id);
            res.status(200).json({
                msg: "Comentário deletado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao deletar comentário"
            });
        }
    }

}
