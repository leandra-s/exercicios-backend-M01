const numeros = [8, 11, 4, 1];
let aux = 0;
let aux1 = 0;

// seu codigo aqui

for (let item of numeros) {
    if (item > aux) {
        aux = item;
        aux1 = item;
    }
    if (item < aux1) {
        aux1 = item;
    }
}
const diferença = aux - aux1;
console.log(diferença);