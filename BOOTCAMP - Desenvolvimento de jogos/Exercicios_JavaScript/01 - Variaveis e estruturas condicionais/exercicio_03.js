
/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
   sua média e a sua classificação conforme a tabela abaixo.

   Média = (nota 1 + nota 2 + nota 3) / 3;

   Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
/*============================*/
/*Constantes*/

const ALL_GRADES = [7, 9, 8];

const MIN_TO_SUMMER_SCHOOL = 5;
const MAX_TO_SUMMER_SCHOOL = 7;

/*============================*/

(function ()
{
    let gpa = (ALL_GRADES[0] + ALL_GRADES[1] + ALL_GRADES[2]) / 3; // calcula a média da nota do aluno

    console.log('Nota do aluno: ' + gpa.toFixed(1)); // Mostra no console a nota média do aluno

    /*Mostra no console o estado atual do aluno com a nota*/
    if (gpa < MIN_TO_SUMMER_SCHOOL){
        console.log('Aluno reprovado.');
    } else if(gpa <= MAX_TO_SUMMER_SCHOOL){
        console.log('Aluno em recuperação.');
    } else {
        console.log('Aluno aprovado.');
    }
}) ()