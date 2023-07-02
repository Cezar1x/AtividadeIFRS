// 38. Ler dois valores numéricos inteiros (representados pelas variáveis a e b) e apresentar o resultado do quadrado da divisão do primeiro valor (variável a) em relação ao segundo valor (variável b).

var a = parseFloat(prompt(`Digite o valor:`));
var b = parseFloat(prompt(`Digite o valor:`));
var verificarInteiros = Number.isInteger(valor);
var valor = (a/b)**2;

if (verificarInteiros) {
    console.log(`O valor final ficou em ${valor}.`);
} else {
    console.log(`Os números não são inteiros.`);
} 
