const prompt = require("prompt-sync")();

let notas = [];
let soma = 0;
for (let i = 0; i < 3; i++) {
    let notass = Number(prompt("DIGITE SUA NOTA: "))
    notas.push(notass)
    soma += notas[i];
}
media = soma / 3

console.log(media);






//05. NOTAS E MEDIA; SOLICITE A QUANTIDADE DE NOTAS E DEPOIS RECEBA AS NOTAS E CALCULE A MEDIA 