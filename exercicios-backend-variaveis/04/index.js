console.log("Qual será meu montante ao final? ");

let capital = 1000;
let tempo = 5;
let taxaMensal = 12.5 / 100;
let montante = capital * ((1 + taxaMensal) ** tempo);

console.log(`Capital: ${capital}`);
console.log(`Aplicação em meses: ${tempo}`);
console.log(`Taxa mensal fixa: ${taxaMensal}`);
console.log(`Seu montante ao final sera de R$ ${Math.round(montante)} reais`);