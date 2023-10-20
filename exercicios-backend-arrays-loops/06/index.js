const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaDosPares = 0;

for (let item of numeros) {
    if (item % 2 === 0) {
        somaDosPares += item;
    }
}
console.log(somaDosPares);