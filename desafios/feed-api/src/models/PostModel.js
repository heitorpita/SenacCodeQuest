import prisma from '../infra/prisma.js';

export default class PostModel {

    static async listar() {
        return prisma.post.findMany({
            include: {
                author: true,
                comments: {
                    include: {
                        author: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    static async buscarPorId(id){
        return prisma.post.findUnique({
            where: {id: Number(id)},
            include: {
                author: true,
                comments: {
                    include: {
                        author: true
                    }
                }
            }
        });
    }

    static async criar(dados){
        return prisma.post.create(
            {
                data: dados
            }
        )

    }
    static async atualizar(id, dados){
        return prisma.post.update(
            {
                where: {id: Number(id)},
                data: dados
            }
        )
    }
    static async deletar(id){
        return prisma.post.delete(
            {
                where: {id: Number(id)}
            }
        )
    }

    // Feed: lista apenas posts PUBLICADOS, ordenados por data, com autor e contagem de comentários
    static async feed() {
        return prisma.post.findMany({
            where: {
                status: 'PUBLICADO'
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                _count: {
                    select: {
                        comments: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

}