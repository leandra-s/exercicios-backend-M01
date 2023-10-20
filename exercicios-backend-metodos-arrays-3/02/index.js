const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadeMaiorComprimento = cidades.reduce((acumulador, cidadeAtual, index, array) => {
    let maiorComprimento = acumulador

    if (cidadeAtual.length > maiorComprimento.length) {
        maiorComprimento = cidadeAtual
    }

    return maiorComprimento
})

console.log(cidadeMaiorComprimento)

