const numeros = [54, 22, 11, 87, 10, 284];

for (let item of numeros) {
    if (item === 10) {
        console.log(numeros.indexOf(10));
    }
}
if (numeros.indexOf(10) === -1) {
    console.log(numeros.indexOf(10));
}
