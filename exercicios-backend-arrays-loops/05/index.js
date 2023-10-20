const original = [1, 4, 12, 21, 53, 88, 112];
let atualizada = [];

for (let item of original) {
    if (item % 2 === 0) {
        atualizada.push(item);
    }
}
console.log(atualizada);