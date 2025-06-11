let tipos = ["Nacional", "Importado"];
let quantidades = [1, 2, 3, 4, 5];

let precoBase = {
    "Nacional": 50,   
    "Importado": 100
};

for (let i = 0; i < tipos.length; i++) {
    let tipo = tipos[i];
    console.log(`Tipo: ${tipo}`);
    for (let j = 0; j < quantidades.length; j++) {
        let quantidade = quantidades[j];
        let preco = precoBase[tipo] * quantidade;
        console.log(`Quantidade: ${quantidade}, Preço: R$${preco.toFixed(2)}`);
    }
}