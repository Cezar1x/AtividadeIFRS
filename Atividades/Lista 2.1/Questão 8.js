// Questão 8. Faça um algoritmo que leia três valores e indica quantos são pares e quantos são ímpares.

var numero1 = parseFloat(prompt(`Digite o primeiro número:`));
var numero2 = parseFloat(prompt(`Digite o segundo número:`));
var numero3 = parseFloat(prompt(`Digite o terceiro número:`));

if (numero1 % 2 == 0) {
    console.log(`O primeiro número é par.`);
} else {
    console.log(`O primeiro número é ímpar.`);
}

if (numero2 % 2 == 0) {
    console.log(`O segundo número é par.`);
} else {
    console.log(`O segundo número é ímpar.`);
}

if (numero3 % 2 == 0) {
    console.log(`O terceiro número é par.`);
} else {
    console.log(`O terceiro número é ímpar.`);
}