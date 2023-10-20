const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function verificarTamanhoPalavra(palavra) {
    const resultadoVerificacao = palavras.some((palavra) => {
        return palavra.length > 5
    })

    if (resultadoVerificacao) {
        return 'existe palavra inválida'
    } else {
        return 'array validado.'
    }
}

console.log(verificarTamanhoPalavra(palavras))