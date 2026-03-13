const prompt = require("prompt-sync")();
let senha = 0;

do {
    let senha = parseInt(prompt("DIGITE A SENHA:"))

    if (senha == 1234) {
        console.log("certa");
        break;
    }else {
        console.log("errada");
        
    }
    
} while (senha !== 1234);


// Senha segura
// Faça um programa com `do while` que continue pedindo a senha até o usuário digitar "1234".
// Quando digitar corretamente, exiba "Acesso permitido!".
// Dica: Use `if` para dar uma dica: se a senha estiver errada, mostre "Tente novamente".