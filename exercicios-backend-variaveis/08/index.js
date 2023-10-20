console.log("Calcular Comprimento e Área do círculo a partir do Raio");
console.log("");

const r = 1;
const c = (2 * Math.PI * r).toFixed(1);
const a = (Math.PI * (r ** 2)).toFixed(2);

console.log(`Raio do círculo: ${r}`);
console.log(`O comprimento do círculo é ${c}`);
console.log(`A área do círculo é ${a}`);