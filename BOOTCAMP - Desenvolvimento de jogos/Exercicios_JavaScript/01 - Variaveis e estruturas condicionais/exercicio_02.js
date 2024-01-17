
/*Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis, sendo elas:
      1 - Preço do etanol;
      2 - Preço da gasolina;
      3 - O tipo de combustível que está no seu carro;
      4 - Gasto médio de combbustível do carro por KM;
      5 - Distância em KM da viagem;
      
Imprima no console o valor que será gasto para realizar esta viagem.*/

/*========================*/
/*Constantes*/

const GASOLINE_PRICE = 6.10; // Preço da gasolina
const ETHANOL_PRICE = 4.50; // Preço do etanol
const FUEL_TYPE = 'gasolina'; //Tipo de combustível

const CAR_FUEL_KM_FOR_L = 10; // Gasto médio de combbustível do carro por KM
const KM_TOTAL = 100; // Distância em KM da viagem

/*========================*/

(function ()
{
    /* declara a variavel que contém o valor total da viagem e divide a distância total da viagem com o gasto médio do combustível.*/
    let totalPrice = (KM_TOTAL / CAR_FUEL_KM_FOR_L); 

    /* multiplca o valor do tipo de combustível pelos litros necessários para a viagem e mostra seu valor no console*/
    if(FUEL_TYPE === 'gasolina'){
        totalPrice *=  GASOLINE_PRICE;
        console.log('O valor da viagem com gasolina é R$' + totalPrice.toFixed(2));
    } 

    else if(FUEL_TYPE === 'etanol'){
        totalPrice *= ETHANOL_PRICE;
        console.log('O valor da viagem com etanol é R$' + totalPrice.toFixed(2));
    } else {
        console.log('O tipo de gasolina é invalido.');
    }
}) ()