const alunos = ["Ana", "Marcos", "Maria", "Mauro"];

const medias = [7, 4.5, 8, 7.5];

const alunosEMedias = [alunos,medias]

for (i = 0; i < medias.length; i++){
    if(medias[i] < 6){
        console.log(`${alunos[i]}: ${medias[i]} - Reprovado`)
    }else{
        console.log(`${alunos[i]}: ${medias[i]} - Aprovado`)
    }
}