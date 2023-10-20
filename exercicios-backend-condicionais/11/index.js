//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;//3.000 reais

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

// O valor da parcela desse mês é R$ 540 reais

//so paga se a renda durante 60 meses por maior de 2000 reais
//se for baixa nao paga

const parcela = ((rendaMensalEmCentavos * 18) / 100) / 100;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000) {
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais`);
} else if (rendaMensalEmCentavos <= 200000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
} else {
    console.log("Não tem mais o que pagar")
}