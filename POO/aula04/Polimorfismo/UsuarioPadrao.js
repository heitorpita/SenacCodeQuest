const { Usuario } = require("./Usuario");


class UsuarioPadrao extends Usuario {
    acessarSistema(){
        return `${this.nome} (Usuario Padrão) acessou o sistema com permissoes limitadas ${this.email}`
    }

    verPerfil(){
        return `Perfil de ${this.nome}: EMAIL - ${this.email}`
    }

}

module.exports = {UsuarioPadrao};