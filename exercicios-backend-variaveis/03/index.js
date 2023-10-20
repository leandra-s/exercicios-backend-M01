console.log("Precisa de um desconto?");

let myMoney = 80;
let priceOfProduct = 129.99;
let difference = priceOfProduct - myMoney;
let discount = (difference * 100) / priceOfProduct;


console.log(`Sua quantia: ${myMoney}`);
console.log(`O valor do produto: ${priceOfProduct}`);
console.log(`Você precisa de um desconto de ${discount.toFixed(1)}% equivalente a $ ${difference.toFixed(2)} reais, para comprar este produto!`)