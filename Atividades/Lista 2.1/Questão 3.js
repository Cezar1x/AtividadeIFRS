// Questão 3. Faça um algoritmo que leia um número e mostrar se ele é positivo, negativo ou igual a zero.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero == 0) {
    console.log(`O número é igual a zero.`);
} else if (numero > 0) {
    console.log(`O número é positivo.`);
} else {
    console.log(`O número é negativo.`);
}