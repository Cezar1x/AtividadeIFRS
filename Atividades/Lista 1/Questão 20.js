// 20. Ler quatro valores numéricos inteiros e apresentar o resultado das adições e das multiplicações utilizando o mesmo raciocínio aplicado quando do uso de propriedades distributivas para a máxima combinação possível entre as quatro variáveis. Não é para calcular a propriedade distributiva, apenas para usar a sua forma de combinação. Considerando a leitura de valores para as variáveis a, b, c e d, devem ser feitas seis adições e seis multiplicações, ou seja, deve ser combinada a variável a com a variável b, a variável a com a variável c, a variável a com a variável d. Depois é necessário combinar a variável b com a variável c e a variável b com a variável d e, por fim, a variável c será combinada com a variável d.

var a = parseInt(prompt(`Digite o valor "a":`));
var b = parseInt(prompt(`Digite o valor "b":`));
var c = parseInt(prompt(`Digite o valor "c":`));
var d = parseInt(prompt(`Digite o valor "d":`));
var verificarInteiros = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d);

if (verificarInteiros) {
  console.log("Somas:");
  console.log(`"A" + "B" = ${a+b}`);
  console.log(`"A" + "C" = ${a+c}`);
  console.log(`"A" + "D" = ${a+d}`);
  console.log(`"B" + "C" = ${b+c}`);
  console.log(`"B" + "D" = ${b+d}`);
  console.log(`"C" + "D" = ${c+d}`);
  
  console.log("Multiplicações:");
  console.log(`"A" x "B" = ${a*b}`);
  console.log(`"A" x "C" = ${a*c}`);
  console.log(`"A" x "D" = ${a*d}`);
  console.log(`"B" x "C" = ${b*c}`);
  console.log(`"B" x "D" = ${b*d}`);
  console.log(`"C" x "D" = ${c*d}`);
} else {
  console.log("Os valores inseridos não são inteiros.");
}