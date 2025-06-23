const prompt = require("prompt-sync")();

let a = [];

for (let i = 0; i < 5; i++) {
  nome = prompt("Digite um nome: ");
  a.push(nome);
}
console.log(a);
