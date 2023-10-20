const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let item = 0;
let nomesComA = [];

for (item of nomes) {
    if (item.substr(0, 1) === 'a' || item.substr(0, 1) === 'A') {
        nomesComA.push(item);
    }
}
console.log(nomesComA);
