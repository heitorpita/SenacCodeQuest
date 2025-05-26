const prompt = require('prompt-sync')();
let continuar = true;

do{
const x = parseInt(prompt("Digite o primeiro número: "));
const y = parseInt(prompt("Digite o segundo número: "));
const z = parseInt(prompt("Digite o terceiro número: "));

if (x >= 0 && x <= 10 && y >= 0 && y <= 10 && z >= 0 && z <= 10) {
    const escolha = parseInt(prompt("Escolha a média (1: aritmética, 2: geométrica, 3: ponderada): "));
    switch (escolha) {
        case 1:
            console.log(`Média aritmética: ${((x + y + z) / 3)}`);
            break;
        case 2:
            console.log(`Média geométrica: ${Math.cbrt(x * y * z)}`);
            break;
        case 3:
            console.log(`Média ponderada: ${((x * 2 + y * 3 + z * 5) / 10)}`);
            break;
        default:
            console.log("Opção inválida, escolha 1, 2 ou 3");
            let continuar = false;
            break;
    }
} else {
    console.log("Repita, os números não são válidos");
} } while (continuar)


// faça um script que leia tres numeros inteiros positivos (x, y, z)  e efetue o calculo de uma das seguintes medias
// de acordo com a opção informada pelo usuario, o programa devera estar em loop ate que o usuario deseja sair 