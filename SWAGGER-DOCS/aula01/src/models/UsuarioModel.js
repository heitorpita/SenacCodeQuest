import { users } from '../data/data.js';

export class UsuarioModel {
    static listarUsuarios() {
        return users;
    }

    static buscarUsuarioPorId(id) {
        const user = users.find(u => u.id === parseInt(id));
        return user;
    }

    static criarUsuario(novoUsuario) {
        const novoUser = {
            nome: nome,
            email: email,
            telefone: telefone
        };
        users.push(novoUser);
        return novoUser;
        }

        static atualizarUsuario(nome, email, telefone) {

            const index = users.findIndex(u => u.id === parseInt(id));
            if (index === -1) {
                return false
            }
            users[index] = {
                id: id,
                nome: nome,
                telefone: telefone
            }
            return users[index];
        }

    static deletarUsuario(id){
            const index = users.findIndex(u => u.id === parseInt(id));
            if (index === -1) {
                return false
            }
            users.splice(index, 1)
            return true;
    }
    }

