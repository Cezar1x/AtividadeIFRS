// 3. Desenvolva um algoritmo que:
//    • Leia 4 (quatro) números;
//    • Calcule o quadrado de cada um;
//    • Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
//    • Caso contrário, imprima os valores lidos e seus respectivos quadrados. 

var numero1 = parseFloat(prompt(`Digite o primeiro número:`));
var numero2 = parseFloat(prompt(`Digite o segundo número:`));
var numero3 = parseFloat(prompt(`Digite o terceiro número:`));
var numero4 = parseFloat(prompt(`Digite o quarto número:`));
var numero3 = numero3**2;

if (numero3 >= 100){
    console.log(`O quadrado do terceiro número é ${numero3}.`);
} else {
    console.log(`O quadrado do primeiro número é ${numero1**2}.`);
    console.log(`O quadrado do segundo número é ${numero2**2}.`);
    console.log(`O quadrado do terceiro número é ${numero3}.`);
    console.log(`O quadrado do quarto número é ${numero4**2}.`);
}