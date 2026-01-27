const {Animal} = require("./Animal");

class Mamifero extends Animal {

    #tipoPelo;
    #habitat;

    constructor(nome, idade, tipoPelo, habitat) {
        super(nome, idade)
        this.#habitat = habitat;
        this.#tipoPelo = tipoPelo;

    }

    getTipoPelo(){
       return this.#tipoPelo
    }

    setTipoPelo(){
        this.#tipoPelo = tipoPelo;
    }

     getHabitat(){
       return this.#habitat
    }

    setHabitat(){
        this.#habitat = habitat;
    }

    emitirSom() {
        console.log("O MAMIFERO RUNGE OU GRUNHE");
        
    }

    getInfo(){
        return `Nome: ${this.getNome()}, Idade ${this.getIdade()}, Tipo De Pelo ${this.#tipoPelo} , Habitat ${this.#habitat}`
    }

}

module.exports = {Mamifero};