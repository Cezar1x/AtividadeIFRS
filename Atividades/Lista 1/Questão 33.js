// 33. Elaborar um programa de computador que calcule e apresente o valor do volume de uma esfera. Utilize a equação volume = (4 : 3) x π x (raio3 ).

var raio = parseFloat(prompt(`Digite o raio:`));
var volume = (4/3)*3.14*(raio**3);

console.log(`O volume da esfera é ${volume}.`);