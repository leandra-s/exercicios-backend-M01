console.log("Volume de uma esfera a partir do seu diâmetro");

const diametro = 6;
const raio = diametro / 2;
const volumeEsfera = (4 / 3) * (raio ** 3);

console.log(`Qual o diÂmetro? ${diametro}`);
console.log(`O volume da esfera é ${Math.round(volumeEsfera)}pi`);