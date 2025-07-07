const prompt = require("prompt-sync")();    

let num = Number(prompt("Digite um número: "));

if (num == 0) 
{
    console.log("O número é zero.");
}
else {
    console.log(`O número ${num} não é zero.`);
    
}