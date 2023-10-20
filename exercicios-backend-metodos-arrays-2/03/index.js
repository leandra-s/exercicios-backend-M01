const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

function temBebidaOuNao(palavra, bebida) {
    const verificacaoBebidas = palavra.some((item) => {
        return item === bebida
    })

    if (verificacaoBebidas) {
        return 'revise sua lista, joão. possui bebida com venda proibida!'
    } else {
        return 'tudo certo, vamos as compras!'
    }
}

console.log(temBebidaOuNao(palavras, 'cerveja'))