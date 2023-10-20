const alturaEmCm = 185;

//seu código aqui
//menos de 180cm -> REPROVADO
//entre 180 e 185 -> LÍBERO
//entre 186 e 195 -> PONTEIRO
//entre 196 e 205 -> OPOSTO
//mais de 205 -> CENTRAL
console.log(`Altura: ${alturaEmCm}cm`)

if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("LÍBERO");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("PONTEIRO");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("OPOSTO");
} else if (alturaEmCm > 205) {
    console.log("CENTRAL");
} else {
    console.log("REPROVADO");
}
