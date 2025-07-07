const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num1 > num2) {
  console.log(`O número ${num1} é maior que ${num2}.`);
}
else {
    console.log(`O número ${num2} é maior que ${num1}.`);
    
}