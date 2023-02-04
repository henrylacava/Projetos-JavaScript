const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(lista){
    total = lista.reduce((acc,item) => {
        return acc + item
    })
    return total / lista.length
}
console.log(`A média da sala de JavaScript é ${mediaSala(salaJS)}`);
console.log(`A média da sala de Java é ${mediaSala(salaJava)}`);
console.log(`A média da sala de Python é ${mediaSala(salaPython)}`);