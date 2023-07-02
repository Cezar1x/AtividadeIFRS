// 34. Elaborar um programa que leia dois valores numéricos inteiros, os quais devem representar a base e o expoente de uma potência, calcule a potência e apresente o resultado obtido.

var base = parseInt(prompt(`Digite o valor:`));
var expoente = parseInt(prompt(`Digite o valor:`));
var verificarInteiros = Number.isInteger(base) && Number.isInteger(expoente);

if (verificarInteiros) {
    var potencia = (base**expoente);
    console.log(`O resultado da potência é: ${potencia}`);
} else {
    console.log(`Os números não são inteiros.`);
}