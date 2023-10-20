console.log("Soma dos angulos internos de um poligono a partir do numero de lados");

console.log("");

const numeroLados = 6;
const somaAngulosInternos = (numeroLados - 2) * 180;

console.log(`Quantos lados tem o respectivo poligono? ${numeroLados}`);
console.log(`A soma dos ângulos internos do polígono é ${somaAngulosInternos}`);

console.log("");

console.log("Agora, quanto vale cada ângulo? ");

const angulo = somaAngulosInternos / numeroLados;
console.log(`O valor de cada ângulo em graus é ${angulo}, sendo a soma deles ${somaAngulosInternos} com total de ${numeroLados} lados`);
