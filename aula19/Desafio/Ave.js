const {Animal} = require('./Animal')

class Ave extends Animal{
    #tipoBico
    #capacidadeVoo

    constructor(nome, idade, tipoBico, capacidadeVoo){
        super(nome, idade)

        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo;


    }


    getTipoBico(){
        return this.#tipoBico;
    }

    setTipoBico(){
        this.#tipoBico = tipoBico;
    }


    getCapacidadeVoo(){
        return this.#capacidadeVoo;
    }

    setTipoBico(){
        this.#capacidadeVoo = capacidadeVoo;
    }

    emitirSom(){
        console.log("A ave canta ou Pia");
        
    }

    getInfo(){
        return `Nome: ${this.getNome()}, Idade ${this.getIdade()}, Tipo De Bico ${this.#tipoBico}, Capacidade de Voo ${this.#capacidadeVoo}`
    }

}

module.exports = {Ave};