const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

function faixaEtaria(usuários) {
    const resultadoIdade = usuários.filter((pessoa) => {
        return pessoa.idade >= 18 && pessoa.idade <= 65
    })

    const resultadoHabilitaçao = resultadoIdade.every((pessoa) => {
        return pessoa.habilitado === true
    })

    if (resultadoHabilitaçao) {
        return 'todos passaram no teste'
    } else {
        return 'todos precisam estar habilitados'
    }

}

console.log(faixaEtaria(usuários))