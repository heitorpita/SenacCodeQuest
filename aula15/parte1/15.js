const prompt = require("prompt-sync")();

let ano = Number(prompt("Digite um ano: "));

if (ano % 4 == 0) {
    console.log(`O ano ${ano} é bissexto.`);
    
}
else {
    console.log(`O ano ${ano} não é bissexto.`);
}