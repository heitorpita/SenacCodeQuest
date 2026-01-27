const prompt = require("prompt-sync")();

class Usuario {
  nome;
  idade;
  genero;
  telefone;
  email;
  cpf;
  cep;
  rg;

  constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.rg = rg;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  getGenero() {
    return this.genero;
  }

  getTelefone() {
    return this.telefone;
  }

  getEmail() {
    return this.email;
  }

  getCpf() {
    return this.cpf;
  }

  getCep() {
    return this.cep;
  }

  getRg() {
    return this.rg;
  }

  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }

  setGenero(genero) {
    this.genero = genero;
  }

  setTelefone(telefone) {
    this.telefone = telefone;
  }

  setEmail(email) {
    this.email = email;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  setCep(cep) {
    this.cep = cep;
  }

  setRg(rg) {
    this.rg = rg;
  }

   exibirDados() {
    return `
        Nome: ${this.nome}
        Idade: ${this.idade}
        Genero: ${this.genero}
        Telefone: ${this.telefone}
        Email: ${this.email}
        Cpf: ${this.cpf}
        Cep: ${this.cep}
        RG: ${this.rg}
        `;
  }
}

let usuario1 = new Usuario(nome, idade, genero, telefone, email, cpf, cep, rg);


let nome = prompt("Digite o nome: ");
let idade = parseInt(prompt("Digite a idade: "));
let genero = prompt("Digite o gênero: ");
let telefone = prompt("Digite o telefone: ");
let email = prompt("Digite o email: ");
let cpf = prompt("Digite o CPF: ");
let cep = prompt("Digite o CEP: ");
let rg = prompt("Digite o RG: ");


console.log(usuario1.exibirDados());
