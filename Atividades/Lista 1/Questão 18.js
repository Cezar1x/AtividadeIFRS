// 18. Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 quilômetros por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (variável tempo) e a velocidade média (variável velocidade) durante a viagem. Desta forma, será possível obter a distância percorrida com a equação distancia = tempo x velocidade. A partir do valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a equação litros_usados = distancia : 12. O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.

var tempo = parseFloat(prompt(`Digite o tempo:`));
var velocidade = parseFloat(prompt(`Digite a velocidade:`));
var distancia = (tempo*velocidade);
var litros = (distancia/12);

console.log(`A velocidade média foi ${velocidade}.`);
console.log(`O tempo foi de ${tempo}.`);
console.log(`A distância foi de ${distancia}.`);
console.log(`Foram gastos ${litros} litros.`);
