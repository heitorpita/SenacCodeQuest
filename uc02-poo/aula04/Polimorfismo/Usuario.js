//Superclasse ou Classe Pai

class Usuario {
    nome;
    email;

    constructor(nome, email){
        this.nome = nome;
        this.email = email;

    }

    acessarSistema(){
        return `${this.nome} acessou o sistema com o email ${this.email}`
    }
}

module.exports = {Usuario};