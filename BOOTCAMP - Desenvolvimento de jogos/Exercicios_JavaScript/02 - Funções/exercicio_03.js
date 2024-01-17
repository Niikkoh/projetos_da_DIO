
 /* Exercicio: Desenvolver uma função que verifica se é maior de idade */

 /*-----------------------------------*/
 /* Constante */

 const AGE = 19;

  /*-----------------------------------*/

  (function (){

    printIsAdult (AGE);

  }) ()

   /*-----------------------------------*/

   /* Armazena se é adulto ou não*/
   function isAdult (age) { return age >= 18; }


  /* Mostra no console se é adulto ou não*/
   function printIsAdult (age)
   {
        if(isAdult(age))
            console.log('É maior de idade.');
        else
            console.log('É menor de idade.');
   }