let notas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let media = 0;


 for (let i = 0; i < notas.length; i++) {

    if (notas[i] > 50) {
        media++;
        console.log(`POSIÇÃO - ${[i]} = ${notas[i]}`)
    }

 };










// 1. Faça um programa que preencha um vetor com 10 números inteiros, calcule e
// mostre os números superiores a 50 e suas respectivas posições no vetor. O
// programa deverá mostrar uma mensagem se não existir nenhum número nessa
// condição