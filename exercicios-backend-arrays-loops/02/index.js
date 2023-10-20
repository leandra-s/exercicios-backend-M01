const letras = ["A", "a", "B", "E", "e", "u"];
let contador = 0;
let quantidadeEe = 0;
let unidade = quantidadeEe === 1 ? "letra" : "letras";
//encontras letras E ou e

for (contador of letras) {
    if (contador === 'e' || contador === 'E') {
        quantidadeEe += 1
    }
}
if (quantidadeEe === 0) {
    console.log("Nenhuma letra E ou e foi encontrada.");
} else {
    let unidade = quantidadeEe === 1 ? "letra" : "letras";
    console.log(`Foram encontradas ${quantidadeEe} ${unidade} E ou e.`);
}



