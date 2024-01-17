
/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
   a condição de peso de uma pessoa adulta.

   Formula do IMC:
   IMC = peso / (altura * altura)

   Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

   IMC em adultos Condição:
   - Abaixo de 18.5 - Abaixo do peso;
   - Entre 18.5 e 25 - Peso normal;
   - Entre 25 e 30 - Acima do peso;
   - Entre 30 e 40 - Obeso;
   - Acima de 40 - Obesidade Grave; */

/*-------------------------*/ 
/* Constantes */

const WEIGHT = 63;
const HEIGHT = 1.83;

const MAX_TO_LOW_WEIGHT = 18.5;
const MAX_TO_HEALTHY_WEIGHT = 25;
const MAX_TO_OVERWEIGHT = 30;
const MAX_TO_OBESE = 40;

/*-------------------------*/ 

(function ()
{
    let imc = WEIGHT / Math.pow(HEIGHT, 2); // Calcula o IMC

    console.log('IMC: ' + imc.toFixed(2)); // Printa o IMC na tela

    /*Retorna ao usuário seu enquadramento de acordo com o IMC*/
    if(imc < MAX_TO_LOW_WEIGHT)
        console.log('Abaixo do peso');
    else if(imc  < MAX_TO_HEALTHY_WEIGHT)
        console.log('Peso Normal');
    else if(imc  < MAX_TO_OVERWEIGHT)
        console.log('Acima do peso');
    else if(imc  < MAX_TO_OBESE)
        console.log('Obeso');
    else
        console.log('Obesidade grave');
}) ()