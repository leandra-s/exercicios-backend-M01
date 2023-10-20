const jogada1 = 100;
const jogada2 = 23;

//seu código aqui
// Se a soma da jogada1 com a jogada2 dividio por 2 der resto 0, PAR
//senao é impar
const somaJogadas = jogada1 + jogada2;

console.log(`Jogada 1: ${jogada1}`);
console.log(`Jogada 2: ${jogada2}`);
console.log(`Soma: ${somaJogadas}`);


if (somaJogadas % 2 === 0) {
    console.log("PAR");
} else {
    console.log("ÍMPAR");
}