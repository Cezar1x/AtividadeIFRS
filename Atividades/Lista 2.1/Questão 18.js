// Questão 18. Melhore o programa anterior, faça um algoritmo para ler dois números inteiros e informar se os números são iguais ou se são diferentes e, se são diferentes mostrar o maior valor.

var numero1 = parseInt(prompt(`Digite o primeiro número:`));
var numero2 = parseInt(prompt(`Digite o segundo número:`));

if (numero1 == numero2) {
    console.log(`Os números são iguas.`);
} else if (numero2 == numero1) {
    console.log(`Os números são diferentes.`);
} else if (numero1 > numero2) {
    console.log(`Os primeiro número é maior.`);
} else {
    console.log(`Os segundo número é maior.`);
}