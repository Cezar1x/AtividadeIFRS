// 8. Lê o saldo de uma aplicação e imprima o novo saldo, considerado o reajuste de 1%.

var saldo = parseFloat(prompt(`Digite o valor:`));
var novoSaldo = saldo*0.01;

console.log(`Com o reajuste o saldo final ficou ${saldo-novoSaldo}.`);