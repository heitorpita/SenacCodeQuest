const prompt = require("prompt-sync")(); 

 let nomes = [];

 for (let index = 0; index < 4; index++) {
  let nome = prompt("Digite um Nome: ")
    nomes.push(nome)
 }
 let nomee = prompt("Digite outro nome: ")

const found = nomes.find((element) => element == nomee);

if (found == nomee) {
    console.log("NOME ESTA NA LISTA");
    
} else {
    console.log("nome NAO esta na lista");
    
}

// 03. PROCURAR UM NOME O USUARIO DIGITA UM NOME PARA BUSCAR MOSTRE SE ELE EXISTA NO ARRAY