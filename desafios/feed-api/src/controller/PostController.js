import PostModel from "../models/PostModel.js";
import UserModel from "../models/UserModel.js";

export default class PostController {

    static async listar(req, res) {
        try {
            const posts = await PostModel.listar();
            if (!posts || posts.length === 0) {
                res.status(404).json({ msg: "Nenhum post encontrado" });
                return;
            }
            res.status(200).json({ msg: "Lista de posts", posts: posts });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao listar posts"
            });
        }
    }

    // Endpoint /feed - lista posts publicados ordenados por data
    static async feed(req, res) {
        try {
            const posts = await PostModel.feed();
            if (!posts || posts.length === 0) {
                res.status(404).json({ msg: "Nenhum post no feed" });
                return;
            }
            
            // Formata resposta com contagem de comentários
            const feedFormatado = posts.map(post => ({
                id: post.id,
                title: post.title,
                content: post.content,
                status: post.status,
                createdAt: post.createdAt,
                author: post.author,
                comentariosCount: post._count.comments
            }));

            res.status(200).json({ msg: "Feed de posts", posts: feedFormatado });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao carregar feed"
            });
        }
    }

    static async criar(req, res) {
        try {
            const { title, content, status } = req.body;
            
            // Pega authorId do header x-user-id (autenticação simulada)
            const authorId = req.userId;

            if (!title || !content) {
                res.status(400).json({ msg: "Título e conteúdo são obrigatórios" });
                return;
            }

            if (!authorId) {
                res.status(401).json({ msg: "Header x-user-id é obrigatório" });
                return;
            }

            const userExistente = await UserModel.buscarPorId(authorId);
            if (!userExistente) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            const dados = { 
                title, 
                content, 
                authorId: Number(authorId)
            };
            
            // Define status se fornecido
            if (status && ['RASCUNHO', 'PUBLICADO'].includes(status)) {
                dados.status = status;
            }

            const novoPost = await PostModel.criar(dados);
            res.status(201).json({
                msg: "Post criado com sucesso",
                post: novoPost
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar post",
                error: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const post = await PostModel.buscarPorId(id);
            if (!post) {
                res.status(404).json({ msg: "Post não encontrado" });
                return;
            }
            res.status(200).json({ msg: "Post encontrado", post: post });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao buscar post por ID"
            });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { title, content, status } = req.body;
            const userId = req.userId;
            const userRole = req.userRole;

            const postExistente = await PostModel.buscarPorId(id);
            if (!postExistente) {
                res.status(404).json({ msg: "Post não encontrado" });
                return;
            }

            // Verifica se é o autor ou admin
            if (postExistente.authorId !== Number(userId) && userRole !== 'ADMIN') {
                res.status(403).json({ msg: "Apenas o autor ou admin pode editar este post" });
                return;
            }

            const dados = {};
            if (title) dados.title = title;
            if (content) dados.content = content;
            if (status && ['RASCUNHO', 'PUBLICADO'].includes(status)) dados.status = status;

            const postAtualizado = await PostModel.atualizar(id, dados);
            res.status(200).json({
                msg: "Post atualizado com sucesso",
                post: postAtualizado
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao atualizar post"
            });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const userId = req.userId;
            const userRole = req.userRole;

            const postExistente = await PostModel.buscarPorId(id);
            if (!postExistente) {
                res.status(404).json({ msg: "Post não encontrado" });
                return;
            }

            // Verifica se é o autor ou admin
            if (postExistente.authorId !== Number(userId) && userRole !== 'ADMIN') {
                res.status(403).json({ msg: "Apenas o autor ou admin pode deletar este post" });
                return;
            }

            await PostModel.deletar(id);
            res.status(200).json({
                msg: "Post deletado com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                error: error.message,
                msg: "Erro ao deletar post"
            });
        }
    }

}
