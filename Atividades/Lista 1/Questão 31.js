// 31. Elaborar um programa que leia dois valores numéricos reais desconhecidos representados pelas variáveis a e b. Calcular e apresentar os resultados das quatro operações aritméticas básicas.

var a = parseInt(prompt(`Digite o valor:`));
var b = parseInt(prompt(`Digite o valor:`));

console.log(`A adição entre ${a} e ${b} é: ${(a+b)}.`);
console.log(`A subtração entre ${a} e ${b} é: ${(a-b)}.`);
console.log(`A multiplicação entre ${a} e ${b} é: ${(a*b)}.`);
console.log(`A divisão entre ${a} e ${b} é: ${(a/b)}.`);