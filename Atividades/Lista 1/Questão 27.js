// 27. Construir um programa que leia três valores numéricos inteiros (representados pelas variáveis a, b e c) e apresente como resultado final o valor do quadrado da soma dos três valores lidos.

var b = parseInt(prompt(`Digite o valor "b":`));
var c = parseInt(prompt(`Digite o valor "c":`));
var verificarInteiros = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);

if (verificarInteiros) {
    console.log(`O valor final é: ${(a+b+c)**2}.`);
} else {
    console.log(`Os números não são inteiros.`);
}