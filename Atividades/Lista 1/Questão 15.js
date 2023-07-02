// 15. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A equação de conversão é f = (9 x c + 160) : 5, sendo f a temperatura em Fahrenheit e c a temperatura em Celsius.

var celsius = parseFloat(prompt(`Digite a temperatura:`));
var fahrenheit = (9*celsius+160)/5;

console.log(`Convertendo a temperatura ela fica em ${(fahrenheit)} graus F°.`);