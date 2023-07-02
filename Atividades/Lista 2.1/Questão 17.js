// Questão 17. Faça um algoritmo para ler dois números inteiros e informar se estes números são iguais ou se são diferentes.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));

if (numero1 == numero2) {
    console.log(`Os números são iguas.`);
} else {
    console.log(`Os números são diferentes.`);
}