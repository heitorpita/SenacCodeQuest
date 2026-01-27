const prompt = require("prompt-sync")();

function soma () {
    let nums = [];
    let soma = 0;
    for (let i = 0; i < 2; i++) {
        let numbs = Number(prompt("DIGITE UM NUMERO: "))
        nums.push(numbs)
        soma += nums[i];
    }
    
    console.log(soma);
    
}

soma();