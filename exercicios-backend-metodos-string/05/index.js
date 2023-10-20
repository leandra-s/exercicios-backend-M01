const numeroCartao = '1111222233334444';


//mostrando apenas os 4 primeiros e os 4 ultimos
//exemplo: 1111********4444
function formantandoCartao(numeroCartao) {
    let novoNumeroCartao = "";
    for (let item = 0; item < numeroCartao.split("").length; item++) {
        if (item === 4 || item === 5 || item === 6 || item === 7 || item === 8 || item === 9 || item === 10 || item === 11) {
            novoNumeroCartao += '*'
        } else {
            novoNumeroCartao += numeroCartao.split("")[item]
        }
    }

    console.log(novoNumeroCartao);
}

formantandoCartao(numeroCartao)