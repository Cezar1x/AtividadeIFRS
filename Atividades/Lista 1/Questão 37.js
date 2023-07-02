// 37. Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores sucessor e antecessor.

var valor = parseFloat(prompt(`Digite o valor:`));
var verificarInteiros = Number.isInteger(valor);

if (verificarInteiros) {
    console.log(`O número digitado foi ${valor}, seu antecessor é ${valor-1} e seu sucessor é ${valor+1}.`);
} else {
    console.log(`Os números não são inteiros.`);
} 
