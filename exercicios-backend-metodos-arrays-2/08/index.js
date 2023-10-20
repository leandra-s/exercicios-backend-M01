const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

let novoArray = []
const arrayFrutas = frutas.filter((fruta) => {
    let transformaEmMinusculo = (fruta.toLowerCase())

    novoArray.push(transformaEmMinusculo.replace(transformaEmMinusculo[0], transformaEmMinusculo[0].toUpperCase()))
    return novoArray
})

let arrayFrutasFormatado = []
let contador = 0
for (let item = 0; item < novoArray.length; item++) {
    arrayFrutasFormatado.push(`${contador} - ${novoArray[item]}`)
    contador += 1
}
console.log(arrayFrutasFormatado)









// const issoAQcaraslhop = arrayNovaFrutas.filter((fruta) => {
//     return
// })

// issoAQcaraslhop

// const reformadas = []
// const issoAQcaraslhop = frutas.map((fruta) => {

//     let minusculas = fruta.slice(1).toLocaleLowerCase()
//     // console.log(minusculas)
//     reformadas.push(fruta.slice(0, 1).toUpperCase() + minusculas)

//     return (reformadas)
// })

// console.log(issoAQcaraslhop)


