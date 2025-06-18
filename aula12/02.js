const prompt = require("prompt-sync")();
function calcularMediasConsecutivas() {
  const vetorA = [];
  const vetorB = [];

  
  for (let i = 0; i < 15; i++) {
    const valor = parseFloat(prompt(`Digite o valor ${i + 1} do vetor A:`));
    vetorA.push(valor);
  }

  
  for (let i = 0; i < 5; i++) {
    let soma = 0;
    for (let j = 0; j < 3; j++) {
      soma += vetorA[i * 3 + j];
    }
    vetorB.push(soma / 3);
  }

  B
  console.log("Vetor B (médias):", vetorB);
}

calcularMediasConsecutivas();







// 2. Faça um programa que leia do teclado os valores de vetor A 15 elementos reais,
// crie um vetor B, de 5 elementos, que receba em cada posição a média de 3
// elementos consecutivos do vetor A.
// Exemplo:
// A = {1, 2, 3, 2, 2, 2, 5, 7, 9, 2, 4, 6, 3, 5, 7} (entrada lida)
// B = {2, 2, 7, 4, 5} (saída).