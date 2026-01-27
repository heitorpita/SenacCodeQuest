const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num > 10 && num < 100) {
  console.log(`O número ${num} está entre 10 e 100.`);
} else {
  console.log(`O número ${num} não está entre 10 e 100.`);
}
