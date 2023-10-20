//imprimir multiplos de 3, indo de 0 a 500
let contador = 0;

while (contador < 500) {
    contador++;
    if ((contador % 3) === 0) {
        console.log(contador);
    }
}