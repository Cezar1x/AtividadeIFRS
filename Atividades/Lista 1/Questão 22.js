// 22. Efetuar a leitura de um valor numérico inteiro e apresentar o resultado do valor lido elevado ao quadrado.

var valor = parseFloat(prompt(`Digite o valor:`));
var verificarInteiros = Number.isInteger(valor);

if (verificarInteiros) {
    console.log(`O valor ao quadrado é ${valor**2}.`);
} else {
    console.log(`Os números não são inteiros.`);
}