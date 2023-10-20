const celular = 71999918888;
const celularString = String(celular)
let novoCelular = "";
//se tiver 11 digitos tem ddd  (71) 9 9991-8888


if (celularString.split('').length === 10) {
    novoCelular += '(' + celularString.slice(0, 2) + ')' + ' ' + '9' + ' ' + celularString.slice(2, 3) + celularString.slice(3, 6) + '-' + celularString.slice(6)
}
if (celularString.split('').length === 8) {
    novoCelular += '9' + ' ' + celularString.slice(0, 4) + '-' + celularString.slice(4)
}
if (celularString.split('').length === 11) {
    novoCelular += '(' + celularString.slice(0, 2) + ')' + ' ' + celularString.slice(2, 3) + ' ' + celularString.slice(3, 7) + '-' + celularString.slice(7)
}
console.log(novoCelular)