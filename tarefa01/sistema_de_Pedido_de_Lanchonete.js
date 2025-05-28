const prompt = require("prompt-sync")();

let totalGeral = 0;
let codigo, quantidade;

do {
  console.log(`
------ CARDÁPIO ------
1 - Refrigerante (R$1.50)
2 - Cachorro quente (R$1.00)
3 - Bauru (R$1.30)
4 - Hambúrguer (R$1.40)
5 - Cheeseburguer (R$1.20)
0 - Encerrar pedido
-----------------------
  `);

  codigo = parseInt(prompt("Código do produto: "));

  if (codigo === 0) break;

  quantidade = parseInt(prompt("Quantidade: "));

  let preco = 0;

  switch (codigo) {
    case 1: preco = 1.50; 
    break;
    case 2: preco = 1.00; 
    break;
    case 3: preco = 1.30; 
    break;
    case 4: preco = 1.40; 
    break;
    case 5: preco = 1.20; 
    break;
    default:
      console.log("Código inválido.");
      continue;
  }

  let total = quantidade * preco;
  totalGeral += total;

  console.log(`Item adicionado. Subtotal: R$ ${total.toFixed(2)}\n`);

} while (true);

console.log(`Total geral do pedido: R$ ${totalGeral.toFixed(2)}`);
