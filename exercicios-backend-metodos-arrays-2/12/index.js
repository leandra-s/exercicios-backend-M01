const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programadora",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programadora",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const filtroProgramadoras = pessoas.filter((pessoa) => {
    return (pessoa.profissao === "Programadora" || pessoa.profissao === "Programador") && pessoa.idade > 20
})

console.log(filtroProgramadoras)

const filtrarJornalistas = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30
})

console.log(filtrarJornalistas)

const filtrarJovens = pessoas.filter((pessoa) => {
    return (pessoa.profissao === "Programadora" || pessoa.profissao === "Programador" || pessoa.profissao === "Jornalista") && pessoa.idade <= 29
})

console.log(filtrarJovens)