const email = "jose@cubos.academy";

function validacaoDeEmail(email) {
    if (email.slice(0, 1) === '.' || email.slice(-1) === '.' || !email.includes("@") || !email.includes(".")) {
        return "E-mail inválido"
    } else {
        return "E-mail válido"
    }

}

console.log(validacaoDeEmail(email))