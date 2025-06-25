const prompt = require("prompt-sync")();

function media3() {

let notas = [];
let soma = 0;
for (let i = 0; i < 3; i++) {
    let notass = Number(prompt("DIGITE SUA NOTA: "))
    notas.push(notass)
    soma += notas[i];
}
media = soma / 3
console.log(media);

}

media3();