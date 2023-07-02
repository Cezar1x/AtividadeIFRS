// Questão 20. Faça um algoritmo para ler 4 números inteiros e informar se a soma dos dois primeiros números são iguais a soma dos outros valores. Se a soma for igual, mostrar os 4 valores e suas respectivas somas, caso contrário indicar se as somas dos valores são pares ou ímpares.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));
var numero3 = parseInt(prompt(`Digite o terceiro número:`));
var numero4 = parseInt(prompt(`Digite o quarto número:`));
var soma1 = numero1 + numero2;
var soma2 = numero3 + numero4;

if (soma1 == soma2) {
    console.log(`Os 4 valores são: ${numero1}, ${numero2}, ${numero3} e ${numero4}.`);
} else if (soma1 % 2 == 0) {
    console.log(`A primeira soma é par.`);
} else if (soma1 % 2 == 1) {
    console.log(`A primeira soma é ímpar.`);
} else if (soma2 % 2 == 0) {
    console.log(`A segunda soma é par.`);
} else {
    console.log(`A segunda soma é ímpar.`);
}