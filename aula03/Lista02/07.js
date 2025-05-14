const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um numero: "));

if (num >= 100 ) {
    let desconto = (num * 10) / 100 
    let valor_Final = num - desconto
    console.log(`Pelo valor ${num} ser maior que 100 obteve desconto de ${desconto} possuindo um valor final de ${valor_Final}`)
} else {
    console.log(`O valor do produto ${num} é menor que $100 por isso nao obteve desconto`)
}
