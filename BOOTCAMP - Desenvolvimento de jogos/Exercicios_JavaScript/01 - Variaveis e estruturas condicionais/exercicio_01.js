
/*Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis, sendo elas:
      1 - Preço do combustível;
      2 - Gasto médio de combbustível do carro por KM;
      3 - Distância em KM da viagem;
      
    Imprima no console o valor que será gasto para realizar esta viagem.*/


/*Constantes*/

const FUEL_PRICE = 5.79; // Preço do combustível
const CAR_FUEL_KM_FOR_L = 10; // Gasto médio de combbustível do carro por KM
const KM_TOTAL = 100; // Distância em KM da viagem

/*========================*/

(function ()
{
    let totalPrice = (KM_TOTAL / CAR_FUEL_KM_FOR_L) * FUEL_PRICE; // Calcula o valor da viagem

    console.log('O preço do combustível na viagem será de R$' + totalPrice.toFixed(2)); // Imprime o valor
}) ()