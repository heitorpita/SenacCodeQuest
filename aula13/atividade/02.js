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
