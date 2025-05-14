const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite sua nota: "));
const nota2 = Number(prompt("Digite outra nota: "));

media = (nota1 + nota2) / 2

if (media >= 6) {
    console.log(`Sua nota foi ${media} e voce foi APROVADO`)
} else {
    console.log(`voce foi REPROVADO!`)
}
