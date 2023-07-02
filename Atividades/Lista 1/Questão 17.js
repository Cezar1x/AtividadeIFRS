// 17. Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a equação volume = π x Raio² x altura.

var raio = parseFloat(prompt(`Digite o raio:`));
var altura = parseFloat(prompt(`Digite a altura:`));
var volume = ((3.14*raio**2)*altura);

console.log(`O volume é ${volume}.`);