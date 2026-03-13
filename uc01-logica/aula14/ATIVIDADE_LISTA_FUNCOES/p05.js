const prompt = require("prompt-sync")();

function temp () {
    let celsius = Number(prompt("DIGITE TEMPERATURA EM CELSIUS: "))
    
    far = (celsius * 9/5) + 32;
    console.log(far);
    
}

temp();