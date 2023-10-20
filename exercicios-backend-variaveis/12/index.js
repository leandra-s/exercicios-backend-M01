console.log("Qual foi a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago?")
console.log("");

const montante = 90000;
const capitalInicial = 60000;
const tempoEmMeses = 24;
const taxaJuros = ((montante / capitalInicial) ** (1 / tempoEmMeses) - 1) * 100;

console.log(`Capital inical: ${capitalInicial}`);

console.log(`Montante: ${montante}`);

console.log(`Total de meses: ${tempoEmMeses}`);

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros.toFixed(3)}%, pois após ${tempoEmMeses} meses você teve que pagar ${montante} reais.`);


