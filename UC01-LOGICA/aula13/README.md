# 📘 Métodos e Propriedades de Arrays em JavaScript

Este README explica de forma direta os métodos `.pop`, `.unshift`, `.shift`, `.length`, `.indexOf` e `.includes`.

```js
// .pop()
// Remove o último elemento do array e retorna ele
let frutas = ["maçã", "banana", "laranja"];
let ultima = frutas.pop(); // "laranja"
// frutas = ["maçã", "banana"]

// .unshift()
// Adiciona elementos no início do array
let numeros = [2, 3];
numeros.unshift(1); // retorna 3 (novo length)
// numeros = [1, 2, 3]

// .shift()
// Remove o primeiro elemento do array e retorna ele
let nomes = ["Ana", "João", "Carlos"];
let primeiro = nomes.shift(); // "Ana"
// nomes = ["João", "Carlos"]

// .length
// Retorna ou define o tamanho do array
let lista = [10, 20, 30];
let tamanho = lista.length; // 3
lista.length = 2;
// lista = [10, 20]

// .indexOf()
// Retorna o índice do primeiro elemento igual ao valor indicado
let letras = ["a", "b", "c", "d"];
letras.indexOf("c"); // 2
letras.indexOf("x"); // -1 (não encontrado)

// .includes()
// Verifica se o valor existe no array (true ou false)
let cores = ["azul", "vermelho", "verde"];
cores.includes("vermelho"); // true
cores.includes("rosa"); // false
```
