import prisma from '../infra/prisma.js';

export default class CommentModel {

    static async listar() {
        return prisma.comment.findMany({
            include: {
                author: true,
                post: true
            }
        });
    }

    static async buscarPorId(id) {
        return prisma.comment.findUnique({
            where: { id: Number(id) },
            include: {
                author: true,
                post: true
            }
        });
    }

    static async criar(dados) {
        return prisma.comment.create({
            data: dados
        });
    }

    static async atualizar(id, dados) {
        return prisma.comment.update({
            where: { id: Number(id) },
            data: dados
        });
    }

    static async deletar(id) {
        return prisma.comment.delete({
            where: { id: Number(id) }
        });
    }

}
