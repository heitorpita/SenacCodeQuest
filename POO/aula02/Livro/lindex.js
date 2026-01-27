const prompt = require("prompt-sync")();
const Livro = require("./Livro");

const titulo = prompt("Título do livro: ");
const autor = prompt("Autor do livro: ");
const ano = parseInt(prompt("Ano de publicação: "));
const genero = prompt("Gênero: ");

const livro1 = new Livro(titulo, autor, ano, genero);

console.log(livro1.exibirInformacoes());

let opcao;
do {
  console.log("\n1. Emprestar livro");
  console.log("2. Devolver livro");
  console.log("3. Ver informações");
  console.log("0. Sair");

  opcao = parseInt(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      livro1.emprestar();
      break;
    case 2:
      livro1.devolver();
      break;
    case 3:
      console.log(livro1.exibirInformacoes());
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);
