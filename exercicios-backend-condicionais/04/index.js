const ladoA = 5;
const ladoB = 5;

//seu código aqui
//se ladoA for igual ao ladoB -> SIM BUCHA
//senao NAO 
console.log("É bucha ou não?");
console.log("");

console.log(`N° Lado A: ${ladoA}`);
console.log(`N° lado B: ${ladoB}`);
console.log("");

if (ladoA === ladoB) {
    if (ladoA === 0 && ladoB === 0) {
        console.log("SIM - Bucha de branco");
    } else if (ladoA === 1 && ladoB === 1) {
        console.log("SIM - Bucha de ás");
    } else if (ladoA === 2 && ladoB === 2) {
        console.log("SIM - Bucha de duque");
    } else if (ladoA === 3 && ladoB === 3) {
        console.log("SIM - Bucha de terno");
    } else if (ladoA === 4 && ladoB === 4) {
        console.log("SIM - Bucha de quadra");
    } else if (ladoA === 5 && ladoB === 5) {
        console.log("SIM - Bucha de quina");
    } else if (ladoA === 6 && ladoB === 6) {
        console.log("SIM - Bucha de sena");
    }

} else {
    console.log("NÃO");
}