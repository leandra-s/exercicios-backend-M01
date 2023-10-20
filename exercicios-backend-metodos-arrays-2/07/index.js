const endereços = [
    { cep: 10111222, rua: "Rua dos Artistas" },
    { cep: 20111333, rua: "Rua Augusta" },
    { cep: 30222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function buscaDeCEP(endereços, cep) {
    const resultado = endereços.find((endereço) => {
        return endereço.cep === cep
    })
    return resultado.rua
}

console.log(buscaDeCEP(endereços, 30222444))