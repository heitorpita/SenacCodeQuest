const {Animal} = require('./Animal')
const {Mamifero} = require('./Mamifero')
const {Ave} = require('./Ave')

let cachorro = new Mamifero("gatinho", 2, "liso", "Urbano/rural")

console.log(cachorro.getInfo());
console.log(cachorro.emitirSom());


let passaro = new Ave("piupiu", 5, "Pontudo", "Alta")

console.log(passaro.getInfo());
console.log(passaro.emitirSom());

