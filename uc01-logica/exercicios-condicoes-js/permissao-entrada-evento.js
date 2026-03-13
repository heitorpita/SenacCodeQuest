const prompt = require("prompt-sync")();
const idade = parseInt(prompt("Digite a idade: "));

if (idade > 60) {
  console.log("Entrada permitida com desconto");
} else if (idade >= 18 && 60) {
  console.log("Entrada Permitida");
} else {
  console.log("Entrada proibida");
}


// 🧩 Questão 1 – Pode entrar no evento?

//     Crie um código que receba a idade de uma pessoa e diga:

//         Se for menor que 18: "Entrada proibida"

//         Se for entre 18 e 60 (inclusive): "Entrada permitida"

//         Se for maior que 60: "Entrada permitida com desconto"