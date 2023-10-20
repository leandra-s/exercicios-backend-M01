const caractere = "h";

//VOGAIS maiusculas -> AEIOU
//VOGAIS minusculas -> aeiou
//Numeros -> 1234567890
//Consoante -> nada de vogal

///[AEIOU]/.test(caractere);
const vogalMaiuscula = /[AEIOU]/.test(caractere);
const vogalMinuscula = /[aeiou]/.test(caractere);
const numero = /[1234567890]/.test(caractere);

if (vogalMaiuscula === true) {
    console.log("Vogal Maiúscula");
} else if (vogalMinuscula === true) {
    console.log("Vogal Minúscula");
} else if (numero === true) {
    console.log("Número");
} else {
    console.log("Consoante");
}

