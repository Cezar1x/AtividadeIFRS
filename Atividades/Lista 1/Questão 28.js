// 28. Elaborar um programa que leia quatro valores numéricos inteiros (variáveis a, b, c e d). Ao final o programa deve apresentar o resultado do produto (variável p) do primeiro com o terceiro valor, e o resultado da soma (variável s) do segundo com o quarto valor.

var a = parseInt(prompt(`Digite o valor "a":`));
var b = parseInt(prompt(`Digite o valor "b":`));
var c = parseInt(prompt(`Digite o valor "c":`));
var d = parseInt(prompt(`Digite o valor "d":`));
var verificarInteiros = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d);

if (verificarInteiros) {
    var p = (a*c);
    var s = (b+d);
    console.log(`O valor final do produto de ${a} e ${c}, é: ${p}.`);
    console.log(`O valor final da soma de ${b} e ${d}, é: ${s}.`);
} else {
    console.log(`Os números não são inteiros.`);
}