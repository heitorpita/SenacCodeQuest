
const {Pessoa} = require('./Pessoa')
const {Aluno} = require('./Aluno')
const {Professor} = require('./Professor')



const aluno1 = new Aluno("Lucas", 20, 32482347,"Engenharia de Software");


const professor1 = new Professor("Carla", 40, 202312323,"Matemática");


const pessoa = new Pessoa("Heitor", 20)

console.log(aluno1.apresentar());
console.log(aluno1.estudar());

console.log(professor1.apresentar());

console.log(pessoa.apresentar());


