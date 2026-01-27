const prompt = require("prompt-sync")(); 

let num = Number(prompt("Digite um número: "));

if (num > 18 && num < 60) {
  console.log(`O número ${num} está entre 18 e 60.`);
} else {
  console.log(`O número ${num} não está entre 18 e 60.`);
}