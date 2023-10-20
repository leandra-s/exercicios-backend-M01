function encontrarDonoDoPet(usuarios, pet) {

    for (let item of usuarios) {
        for (let i of item.pets) {
            if (i === pet) {
                return `O dono(a) do(a) ${pet} é o(a) ${item.nome}`
                break
            }
        }
    }
    return `Que pena ${pet}, não encontramos seu dono(a)`
}


const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]


console.log(encontrarDonoDoPet(usuarios, 'Max'))