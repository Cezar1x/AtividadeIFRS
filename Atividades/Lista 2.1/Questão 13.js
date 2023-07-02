// Questão 13. Faça um algoritmo que leia um número, mostre na tela se ele é ou não divisível por 5.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero % 5 == 0){
    console.log(`O número é divisível por 5.`);
} else {
    console.log(`O número não é divisível por 5.`);
}