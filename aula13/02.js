// funções interessantes e importantes

let nome = ["Bia", "Ana", "Lucas", "Pedro", "Aline"];

console.log(nome.sort());

nome.forEach(n =>{
    console.log(n);
    
})

let num = [ 10, 0 , 5 , 7];

num.sort((a, b) => a-b) // ordenação para numerico

console.log(num);

let valores = [24, 20 , 30 , 40 , 50, 90, 10];

let maiores = valores.filter(x => x > 25);
console.log(maiores);

