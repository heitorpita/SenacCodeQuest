const prompt = require("prompt-sync")();

let totalGeral = 0;
let codigo = 0;
let jose = 0;
let maria = 0;
let joao = 0;
let branco = 0;
let nulo = 0;

do {
  codigo = parseInt(
    prompt(
      "Código do candidato (1-José, 2-Maria, 3-João, 4-Branco, 5-Nulo, 0-Fim): "
    )
  );

  if (codigo === 0) break;

  switch (codigo) {
    case 1:
      jose++;
      totalGeral++;
      break;
    case 2:
      maria++;
      totalGeral++;
      break;
    case 3:
      joao++;
      totalGeral++;
      break;
    case 4:
      branco++;
      totalGeral++;
      break;
    case 5:
      nulo++;
      totalGeral++;
      break;
    default:
      console.log("Código inválido.");
      continue;
  }
} while (true);

console.log(`TOTAL DE VOTOS: ${totalGeral}`);
console.log(`TOTAL DE VOTOS JOSE: ${jose}`);
console.log(`TOTAL DE VOTOS MARIA: ${maria}`);
console.log(`TOTAL DE VOTOS JOAO: ${joao}`);
console.log(`TOTAL DE VOTOS EM BRANCO: ${branco}`);
console.log(`TOTAL DE VOTOS NULO: ${nulo}`);

if (jose > maria && joao) {
  console.log(`JOSE GANHOU A ELEIÇÃO COM ${jose} VOTOS`);
} else if (maria > jose && joao) {
  console.log(`MARIA GANHOU A ELEIÇÃO COM ${maria} VOTOS`);
} else if (joao > maria && joao) {
  console.log(`JOAO GANHOU A ELEIÇÃO COM ${joao} VOTOS`);
} else if (jose === maria || jose === joao || maria === jose) {
  console.log("DEU EMPATE HAVERA SEGUNDO TURNO ");
} else {
  console.log("HAVERA SEGUNDO TURNO");
}
