//2 arquivo a ser criado

import db from '../config/db.js'

export default class UsuarioModel{

    static listarTodos(){

        const sql = `select id, nome, email FROM usuarios`;
        return db.query(sql);

    }


}