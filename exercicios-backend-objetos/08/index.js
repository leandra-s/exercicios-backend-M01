const usuarios = [
    {
        nome: "João",
        pets: [],
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


for (let item = 0; item < usuarios.length; item++) {
    let { nome } = usuarios[item];
    let { pets } = usuarios[item];
    let petSimOuNao = pets.length === 0 ? 'não tenho' : 'tenho';
    let maisDeUm = pets.length <= 1 ? 'pet' : 'pets';
    let temOuNao = pets.length > 0 ? pets.length : '';
    console.log(`Sou ${nome} e ${petSimOuNao} ${temOuNao} ${maisDeUm}`)
}