//Superclasse ou Classe Pai

class Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Ola, meu Nome é ${this.nome} e tenho ${this.idade}`;
    }


}

module.exports = {Pessoa}
