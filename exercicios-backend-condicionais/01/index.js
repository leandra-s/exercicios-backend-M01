const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui
//pedra papel tesoura
//pedra e tesoura -> pedra
//pedra e papel -> papel
//tesoura e papel -> tesoura

console.log(`Jogada 1: ${jogada1}`);
console.log(`Jogada 2: ${jogada2}`);

if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada2 === "pedra" && jogada1 === "tesoura")) {
    console.log("PEDRA GANHOU");
} else if ((jogada1 === "pedra" && jogada2 === "papel") || (jogada2 === "pedra" && jogada1 === "papel")) {
    console.log("PAPEL GANHOU");
} else if ((jogada1 === "tesoura" && jogada2 === "papel") || (jogada2 === "tesoura" && jogada1 === "papel")) {
    console.log("TESOURA GANHOU")
} else {
    console.log("EMPATE")
}
