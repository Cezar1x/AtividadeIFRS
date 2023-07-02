// Questão 14. Faça um algoritmo que leia um número, mostre na tela se ele é divisível por 11. 

var numero = parseFloat(prompt(`Digite o número:`));

if (numero % 11 == 0){
    console.log(`O número é divisível por 11.`);
} else {
    console.log(`O número não é divisível por 11.`);
}