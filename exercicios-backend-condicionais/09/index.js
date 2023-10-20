const nota = 10;

//E -> menos que 4 pontos
//D -> maior que 4 e menor que 5,9
//C -> maior que 6 e menor que 7,9
//B -> maior que 8 e menor que 8,9
//A -> maior que 9 e menor que 10

if (nota < 4) {
    console.log("O estudando obteve conceito E");
} else if (nota >= 4 && nota <= 5.9) {
    console.log("O estudando obteve conceito D");
} else if (nota >= 6 && nota <= 7.9) {
    console.log("O estudando obteve conceito C");
} else if (nota >= 8 && nota <= 8.9) {
    console.log("O estudando obteve conceito B");
} else {
    console.log("O estudando obteve conceito A");
}
