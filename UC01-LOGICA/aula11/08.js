const prompt = require("prompt-sync")();
let nome;

do {
    nome = prompt("Digite um nome: ")
if (nome.length > 10) {
    console.log("NOME GIGANTE MY BR0");
    
}


} while (nome !== "Sair");




// 8. Lendo nomes com condição
// Crie um programa com `do while` que peça nomes até que o usuário digite "sair". Quando o nome
// digitado tiver mais de 10 letras, mostre "Nome grande!".
// Dica: Use `if` para verificar o tamanho do nome.