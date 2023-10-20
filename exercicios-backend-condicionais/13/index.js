//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

//credito -> 5% de desconto
//cheque -> 3% de desconto
//debito ou dinheiro -> 10% de desconto

if (tipoDePagamento === "credito") {
    const valorFinal = (valorDoProduto - valorDoProduto * 0.05) / 100;
    console.log(`Valor a ser pago: R$${valorFinal}`);
} else if (tipoDePagamento === "cheque") {
    const valorFinal = (valorDoProduto - valorDoProduto * 0.03) / 100;
    console.log(`Valor a ser pago: R$${valorFinal}`);
} else {
    const valorFinal = (valorDoProduto - valorDoProduto * 0.1) / 100;
    console.log(`Valor a ser pago: R$${valorFinal}`);
}