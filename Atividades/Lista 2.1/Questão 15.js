// Questão 15. Faça um algoritmo que leia um número e mostre se ele é divisível por 5 OU por 9. 

var numero = parseFloat(prompt(`Digite o número:`));

if (numero % 5 == 0 || numero % 9 == 0){
    console.log(`O número é divisível por 5 ou por 9.`);
} else {
    console.log(`O número não é divisível por 5 ou por 9.`);
}