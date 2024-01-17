
 /* Exercicio: Desenvolver uma função que escreve meu nome */

 /*---------------------------------------------*/
 /* Constantes */

 const NAME = 'Nicolas';

 /*---------------------------------------------*/


 (function (){

    sayMyName (NAME); // chama a função que escreve o nome da string.

 }) ()

 /* Função escreve no console o nome do usuário */

 function sayMyName (name){

    console.log('Seu nome é: ' + name);
 }