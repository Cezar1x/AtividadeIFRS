// 24. Elaborar um programa que apresente o valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário.

var cotacaoDolar = parseInt(prompt(`Digite o valor do dólar:`));
var dolar = parseInt(prompt(`Digite a quantidade de dólares:`));
var real = (cotacaoDolar*dolar);

console.log(`O valor em real seria ${real}.`);