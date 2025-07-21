const prompt = require("prompt-sync")();
const ContaBancaria = require("./ContaBancaria");

function iniciarAplicacao() {
    console.clear();
    console.log("Bem-vindo ao Banco!\n");

    const saldoInicial = parseFloat(prompt("Digite o saldo inicial da conta: "));
    const conta = new ContaBancaria(saldoInicial);

    let opcao;
    do {
        mostrarMenu();
        opcao = parseInt(prompt("Digite a opção desejada: "));

        switch (opcao) {
            case 1: {
                const valor = parseFloat(prompt("Digite o valor para depositar: "));
                conta.depositar(valor);
                break;
            }
            case 2: {
                const valor = parseFloat(prompt("Digite o valor para sacar: "));
                conta.sacar(valor);
                break;
            }
            case 3:
                console.log(`Saldo atual: R$ ${conta.getSaldo().toFixed(2)}`);
                break;
            case 0:
                console.log("Encerrando o sistema. Obrigado!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }

    } while (opcao !== 0);
}

function mostrarMenu() {
    console.log("\nMenu:");
    console.log("1. Depositar");
    console.log("2. Sacar");
    console.log("3. Ver Saldo");
    console.log("0. Sair");
}

// Iniciar o app
iniciarAplicacao();
