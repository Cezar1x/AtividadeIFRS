// Questão 16. Faça um algoritmo que leia um número e mostre se ele é divisível por 3 E por 7. 

var numero = parseFloat(prompt(`Digite o número:`));

if (numero % 3 == 0 && numero % 7 == 0){
    console.log(`O número é divisível por 3 e por 7.`);
} else {
    console.log(`O número não é divisível por 3 e por 7.`);
}