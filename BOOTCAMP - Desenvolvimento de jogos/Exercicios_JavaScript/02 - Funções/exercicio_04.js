
  /* Elabora um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
     e a escolha da condição de pagamento.
     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
     
     Código Condição de pagamento:
      1 - À vista débito, recebe 10% de desconto;
      2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
      3 = Em duas vezes, preço normal de etiqueta sem juros;
      4 = Acima de duas vezes, preço normal de etiqueta mais juros de 10%
      
      
      DESSA VEZ UTILIZE FUNÇÕES PARA DESENVOLVIMENTO*/

/*--------------------------------------------------*/
/* Constantes */

const PRODUCT_PRICE = 100;
const PAYMENT_CODE = 2;

/*--------------------------------------------------*/

(function (){

    console.log('O custo final do produto será R$' + addPaymentRate(PRODUCT_PRICE, PAYMENT_CODE)); // Mostra ao usuário o preço final do produto

}) ()

/*Identifica o tipo de pagamento e atribui uma promoção ou juros*/

function addPaymentRate (productPrice, paymentCode){
    
    switch (paymentCode){
    case 1: // À vista débito, recebe 10% de desconto;
        productPrice -= applyPercentage(productPrice, 10);
    break;
    case 2: // À vista no dinheiro ou PIX, recebe 15% de desconto
        productPrice -= applyPercentage(productPrice, 15);
    break;
    case 4: // Acima de duas vezes, preço normal de etiqueta mais juros de 10%*/
        productPrice += applyPercentage(productPrice, 10);
    break;
    }

    /*PS: Caso seja o método 3 de compra (até duas vezes no crédito), o preço do produto original não é afetado*/

    return productPrice;
}

function applyPercentage (number, percentage) { return number * (percentage / 100); }