// 21. Elaborar um programa que calcule e apresente o valor do volume de uma caixa retangular, utilizando a equação volume = comprimento x largura x  comprimento.

var base = parseFloat(prompt(`Digite a base:`));
var altura = parseFloat(prompt(`Digite a altura:`));
var comprimento = parseFloat(prompt(`Digite o comprimento:`));
var volume = (comprimento*largura*altura);

console.log(`O volume da caixa é ${volume}.`);