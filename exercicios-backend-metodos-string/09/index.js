const nome = 'Guido Cerqueira';

function geradorDeNickname(nome) {
    let arrayNome = nome.split("")
    arrayNome.unshift("@")
    let nickName = ''

    for (let item of arrayNome) {
        if (item === " ") {
            nickName += ""
        } else {
            nickName += item.toLowerCase()
        }
    }

    arrayNome = nickName.split("")
    while (arrayNome.length > 13) {
        arrayNome.pop()
    }
    nickName = ""
    for (let i of arrayNome) {
        nickName += i
    }
    return nickName
}

console.log(geradorDeNickname(nome))
