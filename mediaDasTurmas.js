const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
let somaMedia = 0;

function calculaMedia(lista){
    for (i = 0; i < lista.length; i++){
        somaMedia += lista[i]
    }
    const mediaGeral = somaMedia / lista.length
    somaMedia = 0
    return mediaGeral
}
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);