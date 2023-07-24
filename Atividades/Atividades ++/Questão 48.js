//Questão 48. Faça uma calculadora com os principais operadores: +, -, *, /. Se o usuário digitar outra operação, mostrar uma mensagem de "Operação inválida". Faça o programa considerando apenas 2 valores digitados.

var operacao = prompt(`Digite uma das opeações validas: "+", "-", "*", "/".`);
var num1 = parseFloat(prompt(`Digite o primeiro número:`));
var num2 = parseFloat(prompt(`Digite o segundo número:`));

switch (operacao) {
    case `+`:
        console.log(`A soma é: ${num1 + num2}`);
        break;
    case `-`:
        console.log(`A subtração é: ${num1 - num2}`);
        break;
     case `*`:
        console.log(`A multiplicação é: ${num1 * num2}`);
        break;
    case `/`:
        console.log(`A divisão é: ${num1 / num2}`);
        break;
    default:
        console.log(`Operação inválida.`);

}