const prompt = require("prompt-sync")();
const { Dado } = require("./Dado");
const { Jogador } = require("./Jogador");
const { SistemaAzar } = require("./SistemaAzar");

function iniciarSistema() {
  let novoTurno = "";
  console.log("Bem-Vindo ao Undefined77");
  let nome = prompt("Informe o seu nome:");
  do {
    let aposta = parseInt(prompt("DIGITE UM VALOR DE 1 A 6: "));
    if (aposta < 1 || aposta > 6) {
      console.log("Aposta inválida! Digite um número entre 1 e 6.");
    } else {
      let lance = new Dado(); //instanciando o objeto Dado
      let jogador = new Jogador(nome, aposta);
      const tigrinho = new SistemaAzar(lance, jogador);
      tigrinho.verificarGanhador();
      novoTurno = prompt("DIGITE S para uma nova aposta ou N PARA ENCERRAR...");
    }

    
  } while (novoTurno.toUpperCase() !== "N");
}

iniciarSistema();
