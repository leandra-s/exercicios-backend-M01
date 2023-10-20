const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

//a) ordem crescente
numeros.sort((numero1, numero2) => {
    return numero1 - numero2
})
console.log(numeros)

//b) ordem decrescente
numeros.sort((numero1, numero2) => {
    return numero2 - numero1
})
console.log(numeros)

//c) ordem crescente com base nos valores dos pontos Unicode
numeros.sort()
console.log(numeros)


const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

//a)ordem alfabetica
frutas.sort((fruta1, fruta2) => {
    return fruta1.localeCompare(fruta2)
})
console.log(frutas)

//b)ordem alfabetica decrescente
frutas.sort((fruta1, fruta2) => {
    return fruta2.localeCompare(fruta1)
})
console.log(frutas)

//c) ordem crescente, de acordo com a quantidade de caracteres
frutas.sort((fruta1, fruta2) => {
    return fruta1.length - fruta2.length//comparar os tamanhos de caracteres das strings
})
console.log(frutas)