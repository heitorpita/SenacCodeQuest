class ContaBancaria {

    #saldo; //atributo privado com #

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    getSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if(valor >= 0) {
            this.#saldo += valor;
        } else {
            console.log("Valor de depósito inválido.");
        }
    }
    sacar(valor) {
        if(this.getSaldo() >= valor  && valor >= 0) {
            this.#saldo -= valor;
        } else if (valor < 0) {
            console.log("nao é possível sacar um valor negativo.");
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    getSaldo() {
        return this.#saldo;
    }

}
module.exports = ContaBancaria