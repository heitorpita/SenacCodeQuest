const prompt = require("prompt-sync")();
const idade = parseInt(prompt("Digite a idade: "));
const genero = prompt("Digite seu genero (M ou F): ").toUpperCase();

if (idade >= 18 && genero === "M") {
  console.log("VOCÊ PODE SE ALISTAR");
} else {
  console.log("VOCÊ NÃO PODE SE ALISTAR");
}

// 🧩 Questão 2 – Alistamento militar

//     Faça um programa que verifica se uma pessoa deve se alistar ao exército.

//         Deve se alistar se for homem e tiver 18 anos ou mais.
