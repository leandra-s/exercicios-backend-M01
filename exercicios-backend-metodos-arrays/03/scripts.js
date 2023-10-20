function grupoDeCarros(nomes, posicoes) {

    return nomes.splice(posicoes, 3).join(" - ")

}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(grupoDeCarros(nomes, posicao))