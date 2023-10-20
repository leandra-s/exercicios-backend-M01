const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];


const nomesComecamComA = nomes.filter((nome) => {
    return nome.slice(0, 1) === 'a' || nome.slice(0, 1) === 'A'
})

console.log(nomesComecamComA)