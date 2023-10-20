const listaDeAulas = [
    {
        Identificador: 1,
        Nome_da_aula: 'Introdução a programaçã',
    },
    {
        Identificador: 2,
        Nome_da_aula: 'Variáveis',
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays"
    }
]


const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
curso.aulas = listaDeAulas;
console.log(curso);