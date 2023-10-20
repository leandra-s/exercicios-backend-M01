console.log("Sistema de calculo para o total de pessoas infectadas pelo Covid-19");

const po = 1000;
const x = 4;
const tempo = 100;
const pessoasInfectadas = po * (x ** (tempo / 7));

console.log(`Populaçao inicial de infectados: ${po}`);
console.log(`Quantidade de pessoas que pode transimitir: ${x}`);
console.log(`Em quanto tempo: ${tempo}`);
console.log(`Apos ${tempo} dias, o total de pessoas infectadas sera de ${Math.round(pessoasInfectadas)}, considerando 100 pessoas inicialmente infectadas`);