const prompt = require('prompt-sync')();

const nota = Number(prompt("Qual sua nota: ")) 

if (nota >= 7){
    console.log(`Parabens sua nota foi ${nota} e voce esta APROVADO`)
} else if (nota >= 5) {
    console.log(`Sua nota foi ${nota} e voce esta de RECUPERAÇÃO`)
} else {
    console.log("REPROVADO")
}