const prompt = require("prompt-sync")();

let a = [];

for (let i = 0; i < 5; i++) {
  nome = prompt("Digite um nome: ");
  a.push(nome);
}
console.log(a);


// 01. LEIA O NOME DO USUARIO O NOME DE 5 FRUTAS , ADICIONE NUM ARRAY E EXIBA NUM CONSOLE COMO SAIDA