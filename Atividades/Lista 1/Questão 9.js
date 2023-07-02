/* 9. Entre com a base e a altura de um retângulo e mostre os resultados:
      a. Perímetro (Perímetro é igual à soma dos 4 lados)
      b. Área (Área é igual à lado vezes lado) */

var base = parseFloat(prompt(`Digite a base:`));
var altura = parseFloat(prompt(`Digite a altura:`));

console.log(`O perímetro é ${((base*2)+(altura*2))}.`);
console.log(`A área é ${(altura*base)}.`);