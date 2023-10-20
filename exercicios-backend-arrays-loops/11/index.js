const original = [5, 7, 13, 17, 26, 34, 118, 245];
let atualizada = [];

for (numeros of original) {
    if (numeros >= 10 && numeros <= 20 || numeros > 100) {
        atualizada.push(numeros);
    }
}
console.log(atualizada);
