// let dia = 1;

// for (let dia = 1; dia <= 7; dia++) {
//     if (dia === 6 || dia === 7) {
//     console.log(`${dia} FIM DE SEMANA`)
// } else {
//     console.log(`${dia} DIA DE SEMANA`);
    
// }}


let diaDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"]

for (let i = 0; i < diaDaSemana.length; i++) {
    if (i + 1 === 6 || i + 1 === 7) {
    console.log(`${i + 1} - ${diaDaSemana[i]} FIM DE SEMANA`)
} else {
    console.log(`${i + 1} - ${diaDaSemana[i]} DIA DE SEMANA`);
} }


// 1. Contando os dias da semana
// Crie um programa que use um laço `for` para exibir no console os dias da semana numerados de 1
// a 7. Ao final de cada dia, exiba se é dia útil ou fim de semana.
// Dica: Use `if` para identificar os dias 6 e 7 como fim de semana.