
// Array para armazenar os números sorteados
let jogadas = [];
let frequencia = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

// Realiza 10 jogadas
for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 6) + 1; // Sorteia diretamente
    jogadas.push(numero);
    frequencia[numero]++;
}

// Mostra os números sorteados
console.log("Números sorteados:", jogadas.join(", "));

// Mostra a frequência de cada número
console.log("\nFrequência dos números:");
for (let numero in frequencia) {
    console.log(`Número ${numero}: ${frequencia[numero]} vezes`);
}


// 4. Faça um programa que receba o número sorteado por um dado em 10 jogadas,
// mostre os números dos dados e a frequência com que apareceram.