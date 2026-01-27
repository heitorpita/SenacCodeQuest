// 3 arquivo a ser criado
import UsuarioModel from "../models/UsuarioModel";

export default class  UsuarioController{

   static async listar(req, res) {

        try {
            const result = await UsuarioModel.listarTodos();

            if (!result) {
                res.status(404).json({msg: "Nenhum usuario no banco"})
                return;
            }
            res.status(200).json({msg: "Usuario encontrados!, result.rows"})
        } catch (error) {
            res.status(500).json({msg: "Erro ao listar usuarios", erro: error.message})
        }


    }



}