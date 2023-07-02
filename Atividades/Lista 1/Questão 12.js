// 12. Calcule o valor de uma prestação em atraso, utilizando a equação: prestacao = valor + (valor x (taxa : 100) x tempo).

var tempo = parseFloat(prompt(`Digite o tempo:`));
var valor = parseFloat(prompt(`Digite o valor:`));
var taxa = parseFloat(prompt(`Digite a taxa:`));
var prestacao = valor+(valor*(taxa/100)*tempo);

console.log(`A prestação é ${prestacao}.`);