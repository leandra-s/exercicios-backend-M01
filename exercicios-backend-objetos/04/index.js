const usuarios = [//maior de 17 anos true
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
let maior_idade = false;
for (let item of usuarios) {
    if (item.idade > 17) {
        maior_idade = true;
        item['maior_idade'] = maior_idade;
    } else {
        maior_idade = false;
        item['maior_idade'] = maior_idade;
    }
}


console.log(usuarios)