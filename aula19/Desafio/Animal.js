class Animal {
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;
        Object.freeze(this)
    }

    getNome(){
       return this.#nome;
    }

    setNome(){
        this.#nome = nome
    }

    getIdade(){
       return this.#idade;
    }

    setIdade(){
        this.#idade = idade;
    }

    emitirSom(){
        console.log("O ANIMAL EMITE UM SOM GENERICO");
        
    }

    getInfo(){
        return `Nome: ${this.#nome}, Idade ${this.#idade}`
    }

}

module.exports = {Animal};