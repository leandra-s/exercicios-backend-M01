const numeros = [0, 122, 4, 6, 7, 8, 44]//invalido pq tem o 7(impar)

function validarNumerosPares(numeros) {
    const validacao = numeros.every((numero) => {
        return numero % 2 === 0
    })
    if (validacao) {
        return 'array válido'
    } else {
        return 'array inválido'
    }
}

console.log(validarNumerosPares(numeros))