//valor do produto comprado.
const valorDoProduto = 100000;//1000 mil reais 
//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;//transformei em centavos

//quanto resta de parcelas e o valor total delas

const valorParcelas = (valorDoProduto / quantidadeDoParcelamento) / 100;//100 reais
const totalDeParcelas = ((valorDoProduto - valorPago) / valorParcelas) / 100;
const unidade = totalDeParcelas === 1 ? "parcela" : "parcelas";

console.log(`Restam ${totalDeParcelas} ${unidade} de R$${valorParcelas}`);