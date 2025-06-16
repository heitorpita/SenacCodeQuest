 let notas = [4, 3, 2, 8, 10]
let media = 0;


 for (let i = 0; i < notas.length; i++) {

    if (notas[i] > 6) {
        media++;
    }

 };

 console.log(media);

//  4. Analisando notas de alunos
// Crie um programa que leia 5 notas com `for`. Ao final, diga quantos alunos estão acima da média
// (nota maior que 6).
// Dica: Use `if` dentro do laço para contar os alunos com nota boa.