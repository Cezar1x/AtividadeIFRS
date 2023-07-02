// 23. Ler dois valores numéricos inteiros (representados pelas variáveis a e b) e apresentar o resultado do quadrado da diferença do primeiro valor (variável a) em relação ao segundo valor (variável b).

var a = parseInt(prompt(`Digite o valor "a":`));
var b = parseInt(prompt(`Digite o valor "b":`));
var diferenca = a - b;

console.log(`O quadrado da diferença entre ${a} e ${b} é ${diferenca**2}.`);
