class Jogador {
    #nome;
    #aposta;

    constructor(nome, aposta) {
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this);
    }

    getNome(){
        return this.#nome;
    }

    getAposta(){
        return this.#aposta;
    }


    setNome(nome) {
        this.#nome = nome;
    }

    setAposta(aposta) {
        this.#aposta = aposta;
    }



}

module.exports = {Jogador};