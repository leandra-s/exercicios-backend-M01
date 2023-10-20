const cpf = "011.022.033-44";
//remover toda pontuaçao de um CPF ou CNPJ  01102203344

function removerPontuacao(cpf) {
    let novoCPF = '';
    for (let item of cpf) {
        if (item === "." || item === "-" || item === "/") {
            novoCPF += ""
        } else {
            novoCPF += item
        }
    }
    return novoCPF
}

console.log(removerPontuacao(cpf))