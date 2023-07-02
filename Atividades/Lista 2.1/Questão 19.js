// Questão 19. Faça um algoritmo que leia 3 valores e mostra o menor valor digitado e o maior valor digitado.

var numero1 = parseFloat(prompt(`Digite o primeiro número:`));
var numero2 = parseFloat(prompt(`Digite o segundo número:`));
var numero3 = parseFloat(prompt(`Digite o terceiro número:`));

if (numero1 > numero2 && numero1 > numero2) {
    console.log(`O maior número é o primeiro.`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O maior número é o segundo.`);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`O maior número é o terceiro.`);
}