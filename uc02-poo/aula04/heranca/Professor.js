const {Pessoa} = require('./Pessoa')

class Professor extends Pessoa {
    matricula;
    disciplina;

    constructor(nome, idade, matricula, disciplina){
        super(nome, idade);
        this.matricula = nome;
        this.disciplina = disciplina;


    }

    ensinar() {
        return `${this.nome} esta ensinando ${this.disciplina}`
    }

}

module.exports = {Professor};