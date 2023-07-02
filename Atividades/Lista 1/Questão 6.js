/* 6. Lê dois números e mostre os seguintes resultados:
      a. Dividendo:
      b. Divisor:
      c. Quociente:
      d. Resto (para calcular o resto de uma divisão, utilize o operador mod.)*/

var dividendo = parseFloat(prompt(`Digite o Dividendo:`));
var divisor = parseFloat(prompt(`Digite o Divisor:`));

    console.log(`O Divdendo é ${dividendo}`);
    console.log(`O Divisor é ${divisor}`);
    console.log(`O Quociente é ${dividendo/divisor}`);
    console.log(`O Resto é ${dividendo%divisor}`);