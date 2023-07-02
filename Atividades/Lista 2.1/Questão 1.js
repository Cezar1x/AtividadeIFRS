// Questão 1. Faça um algoritmo que lê um número e verificar se ele é par ou é ímpar

var numero = parseFloat(prompt(`Digite o número:`));

if (numero % 2 == 0) {
    console.log(`O número é par.`);
} else {
    console.log(`O número é ímpar.`);
}