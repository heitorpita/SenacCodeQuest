const prompt = require("prompt-sync")();

let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  let numero = Number(prompt("DIGITE UM NUMERO: "));
  numeros.push(numero);
    soma += numeros[i];
  
}

console.log(numeros);
console.log(soma);

// 02. SOMA DOS NUMEROS PECA AO USUARIO PARA DIGITAR 5 NUMEROS ARMAZENE-OS EM UM ARRAY E EXIBA A LISTA DE NUMEROS DIGITADOS A SOMA TOTAL DESSES NUMEROS