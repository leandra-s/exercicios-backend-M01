const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

//ACESSO NEGADO -> menores de 12 anos, maiores de 65 anos, possui patologia cardiaca, menor de 150cm de altura
//PODEM BRINCAR -> 10 reais caso seja estudante ou menor de 18 anos( e maior ou igual a 12), 20 caso contrario

console.log(`Idade: ${idade} anos`);
console.log(`Possui patologia: ${possuiPatologia}`);
console.log(`Altura: ${altura}cm`);
console.log(`É estudante: ${ehEstudante}`);
if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante === true || (idade < 18 && idade >= 12)) {
    console.log("10 reais");
} else {
    console.log("20 reais");
}