const texto = "Aprenda programar do zero na Cubos Academy ";
//aprenda-programar-do-zero-na-cubos-academy
//colocar tudo minusculo e dps colocar hifen sem deixar espaços

function tranformadorDeURL(texto) {
    let novoTextoURL = ""
    for (let item = 0; item < texto.split(" ").length; item++) {
        if ((texto.split(" ").length - 1) === item) {
            novoTextoURL += texto.split(" ")[item].toLocaleLowerCase()
            break;
        }
        novoTextoURL += texto.split(" ")[item].toLocaleLowerCase() + '-'

    }

    return novoTextoURL
}

console.log(tranformadorDeURL(texto))
