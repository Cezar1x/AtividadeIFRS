// 4. Faça um algoritmo que leia um número inteiro e mostre uma mensagem, indicando se este número é par ou ímpar, e se é positivo ou negativo. 

var numero = parseInt(prompt(`Digite o número:`));

if (numero % 2 == 0) {
    if (numero > 0){
        console.log(`O número é par e positivo.`);
    } else {
        console.log(`O número é par e negativo.`);
    }
} else if (numero > 0){
    console.log(`O número é ímpar e positivo.`);
} else {
    console.log(`O número é ímpar e negativo.`);
}