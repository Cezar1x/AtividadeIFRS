// Questão 10. Faça um algoritmo que leia dois números inteiros, efetue a adição e a multiplicação; Se o resultado da multiplicação for menor que 75, mostre na tela os valores e a soma, senão mostre os valores e a multiplicação.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));
var soma = numero1 + numero2;
var multiplicaçao = numero1 * numero2;

if (multiplicaçao < 75) {
    console.log(`O valor da soma é: ${soma}.`);
} else {
    console.log(`O valor da multiplicação é: ${multiplicaçao}.`);
}