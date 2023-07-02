// Questão 9. Faça um algoritmo que leia três valores e mostra quantos são negativos.

var numero1 = parseFloat(prompt(`Digite o primeiro número:`));
var numero2 = parseFloat(prompt(`Digite o segundo número:`));
var numero3 = parseFloat(prompt(`Digite o terceiro número:`));

if (numero1 > 0) {
    console.log(`O primeiro número é positivo.`);
} else {
    console.log(`O primeiro número é negativo.`);
}

if (numero2 > 0) {
    console.log(`O segundo número é positivo.`);
} else {
    console.log(`O segundo número é negativo.`);
}

if (numero3 > 0) {
    console.log(`O terceiro número é positivo.`);
} else {
    console.log(`O terceiro número é negativo.`);
}