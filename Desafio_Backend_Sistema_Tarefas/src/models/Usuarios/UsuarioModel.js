import { usuario } from "../../data/Usuarios/UsuarioBanco.js"


export default class UsuarioModel {

	static listar() {
		return usuario;

	}

    static criar(usuarios) {
        usuario.push(usuarios);
        return usuarios;
    }


    static atualizar(id, novosDados){
        const index = usuarios.findIndex(u => u.id === parseInt(id))
        if(index === -1 ){
            return null;
        }
        usuario[index] = {...usuario[index], ...novosDados};
        return usuario[index]
    }

    static deletar(id){
        const index = usuarios.findIndex(u => u.id === parseInt(id));
        if (index === -1) {
            return false;
        }
        usuario.splice(index, 1);
        return true;


    }



}
