const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = {};//usuarios menosres de 18 anos
const adultos = {};//usuarios maiores(=) de 18 anos

for (let lista of usuarios) {
    if (lista.idade >= 18) {
        adultos = lista;
    } else {
        jovens = lista;
    }
}

console.log(jovens);
console.log(adultos);