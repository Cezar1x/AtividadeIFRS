//Questão 11. Faça um algoritmo que leia dois números inteiros e efetue a adição; Se o resultado for maior que 20, mostre na tela o resultado mais a soma do valor 8, senão mostre o resultado subtraindo o valor 5.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));
var soma = numero1 + numero2;

if (soma > 20) {
    console.log(`O resultado foi maior que 20, ${soma+8} é o valor final.`);
} else {
    console.log(`O resultado foi menor que 20, ${soma-5} é o valor final.`);
}