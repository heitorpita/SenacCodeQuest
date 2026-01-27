const { Usuario } = require("./Usuario");


class UsuarioAdmin extends Usuario {
    acessarSistema(){
        return `${this.nome} (Usuario ADMIN) acessou o sistema com permissoes limitadas ${this.email}`
    }

    excluirUsuario(){
        return `Perfil de ${this.nome}: EMAIL - ${this.email} FOI EXCLUIDO`
    }

}

module.exports = {UsuarioAdmin};