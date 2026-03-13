import prisma from '../infra/prisma.js';

export default class UserModel {

    static async listar() {
        return prisma.user.findMany();
    }

    static async buscarPorId(id){
        return prisma.user.findUnique({
            where: {id: Number(id)},
            include: {
                posts: true,
                comments: true
            }
        });
    }

    static async buscarPorEmail(email){
        return prisma.user.findUnique({
            where: {email: email}
        });
    }

    static async criar(dados){
        return prisma.user.create(
            {
                data: dados
            }
        )

    }
    static async atualizar(id, dados){
        return prisma.user.update(
            {
                where: {id: Number(id)},
                data: dados
            }
        )
    }
    static async deletar(id){
        return prisma.user.delete(
            {
                where: {id: Number(id)}
            }
        )
    }



}