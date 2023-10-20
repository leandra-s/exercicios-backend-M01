const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
const filas = filaDeDentro.length;

//se a fila de dentro tiver 5 pessoas -> fica do mesmo jeito
//se estiver menos que 5 -> completa com as pessoas da fila de fora
// filadefora.length - 1

for (let item of filaDeDentro) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);