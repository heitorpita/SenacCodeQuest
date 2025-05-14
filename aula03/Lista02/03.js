const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um Numero: "));
const num2 = Number(prompt("Digite outro numero: "));

if (num > num2) {
    console.log(`${num} é maior que ${num2}`)
} else {
    console.log(`${num2} é maior que ${num}`)
}