// 36. Elaborar um programa que calcule uma raiz de base qualquer com índice qualquer.

var base = parseFloat(prompt(`Digite o valor da base: `));
var indice = parseFloat(prompt(`Digite o valor do índice: `));
var resultado = base ** (1 / indice);

console.log(`O resultado da raiz é: ${resultado}`);