const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos      //para real da 30.000

//seu código aqui

//abaixo de 28.559,70 reais nao paga, acima sim // 28.559,70 -> centavos 2.855.970

//pessoas isentad o IR -> portadora de doença grave, aposentados, rendimentos no ano abaixo de 2.855.970 centavos
//nao fica isento se for maior que 2.855.970 centavos

console.log(`Aposentado: ${aposentada}`);
console.log(`Portadora de doença grave: ${portadoraDeDoenca}`);
console.log(`Total de rendimentos: ${totalDeRendimentos}`);
console.log("");

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}