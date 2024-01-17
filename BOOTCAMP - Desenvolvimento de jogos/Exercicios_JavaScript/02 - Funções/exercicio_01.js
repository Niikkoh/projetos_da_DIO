
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
   - Acima de 40 - Obesidade Grave; 
   
   DESSA VEZ UTILIZE FUNÇÕES*/

/*--------------------------------------------------------*/ 
/* Constantes */

const WEIGHT = 63;
const HEIGHT = 1.83;

const MAX_TO_LOW_WEIGHT = 18.5;
const MAX_TO_HEALTHY_WEIGHT = 25;
const MAX_TO_OVERWEIGHT = 30;
const MAX_TO_OBESE = 40;

/*--------------------------------------------------------*/ 
/* Função principal */

(function ()
{
    let imc = calcIMC(WEIGHT, HEIGHT); // Chama a função que calcula o IMC

    console.log('IMC: ' + imc.toFixed(2)); // Mostra o IMC na tela
    console.log(printIMC(imc)); // Mostra como o usuário se adequa com seu IMC
    
}) ()

/*--------------------------------------------------------*/ 

/* Calcula IMC */

function calcIMC (weight, height) { return weight / Math.pow(height, 2);}


/*Mostra no console em qual enquadramento o usuário está de acordo com seu IMC*/

function printIMC (imc){

    if(imc < MAX_TO_LOW_WEIGHT)
        return 'Abaixo do peso';
    else if(imc  < MAX_TO_HEALTHY_WEIGHT)
        return 'Peso Normal';
    else if(imc  < MAX_TO_OVERWEIGHT)
        return 'Acima do peso';
    else if(imc  < MAX_TO_OBESE)
        return 'Obeso';
    else
        return 'Obesidade grave';
}