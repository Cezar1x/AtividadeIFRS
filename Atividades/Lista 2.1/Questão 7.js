// Questão 7. Faça um algoritmos que leia três valores e mostra se a soma dos valores é par ou ímpar.

var numero1 = parseFloat(prompt(`Digite o primeiro número:`));
var numero2 = parseFloat(prompt(`Digite o segundo número:`));
var numero3 = parseFloat(prompt(`Digite o terceiro número:`));
var soma = numero1 + numero2 + numero3;

if (soma % 2 == 0) {
    console.log(`A soma dos três números é par.`);
} else {
    console.log(`A soma dos três números é ímpar.`);
}