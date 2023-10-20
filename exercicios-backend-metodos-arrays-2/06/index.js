const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const caracteresMaioresQue8 = cidades.filter((cidade) => {
    return cidade.length <= 8
})

console.log(caracteresMaioresQue8.join(", "))