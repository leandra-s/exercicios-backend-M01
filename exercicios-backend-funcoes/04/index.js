const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        this.historicos.push({
            tipo: "Depósito",
            valor: valor,
        });
        return `Deposito de R$${valor / 100} realizado para o cliente: Maria.`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: Maria`;
        } else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor: valor,
            })
            return `Saque de R$${valor / 100} realizado para o cliente: Maria`;
        }
    },
    extrato: function () {
        return `
        Extrato de Maria - Saldo: ${this.saldo / 100}
        Histórico:
        Depósito de $100
        Saque de $50
        `;
    }
}
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato())