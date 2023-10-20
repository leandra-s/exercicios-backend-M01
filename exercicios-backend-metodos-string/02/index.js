const cpf = "12345678900";
const cnpj = "12345678900";

function validacaoEFormatacao(cpf, cnpj) {
    //validar tamanho de 11 digitos CPF 123.456.789-00
    //formatarar
    let novoCPF = ""
    if (cpf.length === 11) {
        novoCPF += cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9)
        console.log(novoCPF)
    } else {
        console.log('CPF Inválido')
    }

    //validar 14 digitos    
    //formatar
    let novoCNPJ = ''
    if (cnpj.length === 14) {
        novoCNPJ += cnpj.slice(0, 2) + '.' + cnpj.slice(2, 5) + '.' + cnpj.slice(5, 8) + '/' + cnpj.slice(8, 12) + '-' + cnpj.slice(12)
        console.log(novoCNPJ)
    } else {
        console.log('CNPJ Inválido')
    }
}

validacaoEFormatacao(cpf, cnpj)

//ALTERNATIVO
// let quantidade = 0;
// let aux = "";
// for (let item of cpf) {
//     quantidade += 1;
//     if (quantidade <= 11) {
//         aux += item
//         if (quantidade === 3 || quantidade === 6) {
//             aux += '.'
//         }
//         if (quantidade === 9)
//             aux += '-'
//     }
// }
// console.log(aux)