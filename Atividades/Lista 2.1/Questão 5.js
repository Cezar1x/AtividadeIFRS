// Questão 5. Faça um algoritmo que leia um número e mostra se o número é maior que 20, menor que 20 ou igual a 20.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero == 20) {
    console.log(`O número é igual a 20.`);
} else if (numero > 20) {
    console.log(`O número é maior.`);
} else {
    console.log(`O número é menor.`);
}