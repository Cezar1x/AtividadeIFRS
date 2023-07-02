// 16. Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A equação de conversão é c = ((f - 32) x 5) : 9, sendo f a temperatura em Fahrenheit e c a temperatura em Celsius.

var fahrenheit = parseFloat(prompt(`Digite a temperatura:`));
var celsius = (fahrenheit-32)*5;

console.log(`Convertendo a temperatura ela fica em ${(celsius)} graus C°.`);