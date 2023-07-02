// 35. Elaborar um programa que leia uma medida em pés e apresente o seu valor convertido em metros, lembrando que um pé mede 0,3048 metro, ou seja, um pé é igual a 30,48 centímetros.

var pes = parseFloat(prompt(`Digite o valor:`));
var metros = pes*0.3048;

console.log(`O valor em metros é: ${metros}.`);