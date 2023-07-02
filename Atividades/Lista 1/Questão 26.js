// 26. Construir um programa que leia três valores numéricos inteiros (representados pelas variáveis a, b e c) e apresente como resultado final o valor da soma dos quadrados dos três valores lidos.

var a = parseInt(prompt(`Digite o valor "a":`));
var b = parseInt(prompt(`Digite o valor "b":`));
var c = parseInt(prompt(`Digite o valor "c":`));
var verificarInteiros = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);

if (verificarInteiros) {
    var a = a**2;
    var b = b**2;
    var c = c**2;
    console.log(`O valor final é: ${a+b+c}.`);
} else {
    console.log(`Os números não são inteiros.`);
}