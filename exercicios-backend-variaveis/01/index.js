console.log("Bem Vinda(o) a Calculadora de IMC");
console.log("");

let altura = 1.80, peso = 104;
let imc = peso / (altura ** 2);

console.log(`Altura: ${altura}`);

console.log(`Peso: ${peso}`);

console.log(`IMC : ${imc.toFixed(1)}`);