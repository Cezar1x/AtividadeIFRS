// 25. Elaborar um programa que apresente o valor da conversão em dólar (US$) de um valor lido em real (R$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário.

var cotacaoDolar = parseInt(prompt(`Digite o valor do dólar:`));
var real = parseInt(prompt(`Digite a quantidade de reais:`));
var dolar = (cotacaoDolar*real);

console.log(`O valor em dolar seria ${dolar}.`);