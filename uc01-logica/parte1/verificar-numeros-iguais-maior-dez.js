const prompt = require("prompt-sync")(); 

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if (num1 == num2 && num1 > 10 && num2 > 10) {
    console.log(`Os números ${num1} e ${num2} são iguais e maiores que 10.`);
}
else {
    console.log(`Os números ${num1} e ${num2} não são iguais ou não são maiores que 10.`);
    
}