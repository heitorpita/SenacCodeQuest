let dobro = (x) => {
    return x * 2;
}
let resultado = dobro(10);
console.log(resultado); 


// let dobro = x => x * 2; // Versão simplificada
// let dobro = (x) => x * 2; // Versão com parênteses
// let dobro = (x) => { return x * 2; } // Versão com chaves
// let dobro = x => { return x * 2; } // Versão com chaves e sem parênteses

function exibirArray(array) {
    array.forEach(item => console.log(item));
}
let games = ["The Last of Us", "God of War", "Horizon Zero Dawn"];
exibirArray(games);
exibirArray(["Banana", "Maçã", "Laranja"]);