// Questão 12. Elabore um algoritmo que leia um número e mostre a raiz quadrada do número caso ele seja positivo e o quadrado do número caso ele seja negativo.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero > 0) {
    let raiz = Math.sqrt(numero);
    console.log(`A raiz quadrada de ${numero} é ${raiz}.`);
} else {
    let quadrado = numero ** 2;
    console.log(`O quadrado do ${numero} é ${quadrado}.`);
}

6,10,11,17,18,20