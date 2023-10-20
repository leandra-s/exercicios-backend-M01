const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumeroArray = numeros.reduce((acumulador, numeroAtual, index, array) => {
    let maiorNumero = acumulador

    if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual
    }

    return maiorNumero
})

console.log(maiorNumeroArray)