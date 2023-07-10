// Questão 59. Faça um algoritmo onde o usuário digitará 5 valores de 0 a 10; Calcule a média dos valores digitados e mostre uma mensagem de APROVADO, se a média for maior ou igual a 6. Caso contrário, mostre a mensagem EM RECUPERAÇÃO.

var valor1 = (parseFloat(prompt(`Digite o primeiro valor:`)));
var valor2 = (parseFloat(prompt(`Digite o segundo valor:`)));
var valor3 = (parseFloat(prompt(`Digite o terceiro valor:`)));
var valor4 = (parseFloat(prompt(`Digite o quarto valor:`)));
var valor5 = (parseFloat(prompt(`Digite o quinto valor:`)));

var media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;

if (media >= 6 ) {
    console.log(`Aprovado.`);
} else {
    console.log(`Reprovado.`);
}