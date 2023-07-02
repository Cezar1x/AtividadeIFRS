// Questão 6. Faça um algoritmo que leia dois números inteiros e efetue a adição; Se o resultado for maior que 10, mostre na tela a soma, senão mostre os dois valores apenas.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));
var soma = numero1 + numero2;

if (soma > 10) {
    console.log(`A soma final foi:${soma}.`);
} else {
    console.log(`Os dois valores são ${numero1} e ${numero2}.`);
}