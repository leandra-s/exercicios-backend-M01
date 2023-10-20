let identificador = "123";
let nome = "leandra rayele";
let email = "      jose@email.com  ";
//O padrão do identificador são seis dígitos e caso o número não possua essa quantidade, complete com zero a esquerda;
//O nome e sobrenome precisam sempre começar com letra maiúscula;
//O e-mail não pode ter espaços em branco;//

identificador = identificador.padStart(6, '0')
console.log(identificador)

const acharEspaco = nome.indexOf(' ')
const segundoEspaço = nome.indexOf(" ", (acharEspaco + 2))
nome = nome.slice(0, 1).toUpperCase() + nome.slice(1, acharEspaco) + nome.slice(acharEspaco, 6).toUpperCase() + nome.slice(6, segundoEspaço) + nome.slice(segundoEspaço, 12).toUpperCase() + nome.slice(12)
console.log(nome)

email = email.trim()
console.log(email)
