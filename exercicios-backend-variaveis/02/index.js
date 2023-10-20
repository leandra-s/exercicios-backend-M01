console.log("Conversão de Fahrenheit para Celsius.")
console.log();
let grausFahrenheit = 80;
let conversaoParaCelsius = (grausFahrenheit - 32) * 5 / 9;

console.log(`Quantos Fahrenheit está fazendo em sua cidade? ${grausFahrenheit}°F`);

console.log(`Passando para Celsius, está fazendo ${Math.round(conversaoParaCelsius)}°C`);