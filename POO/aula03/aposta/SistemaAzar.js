const {Dado} = require('./Dado');
const {Jogador} = require('./Jogador')

class SistemaAzar{
    #dado;
    #jogador

    constructor(dado, jogador) {
        if (dado instanceof Dado && jogador instanceof Jogador) {
            this.#dado = dado;
            this.#jogador = jogador;
        }
        Object.freeze(this);
    }
    getDado() {
        return this.#dado;
    }
    setDado(dado) {
        this.#dado = dado;
    }
    getJogador(){
        return this.#jogador;
    }
    setJogador(jogador) {
        this.#jogador = jogador;
    }
    verificarGanhador() {
        if(this.#dado.getFace() === this.#jogador.getAposta()){
            console.log(`Parabens ${this.#jogador.getNome()} A APOSTA`);
            console.log(`Sua Aposta foi ${this.#jogador.getAposta()}`);
            console.log(`A FACE DO DADO FOI ${this.#dado.getFace()}`);
            
        } else {
            console.log(`${this.#jogador.getNome()} VOCE PERDEU A APOSTA`);
            console.log(`Sua Aposta foi ${this.#jogador.getAposta()}`);
            console.log(`A FACE DO DADO FOI ${this.#dado.getFace()}`);
        }
    }
}

module.exports = {SistemaAzar}