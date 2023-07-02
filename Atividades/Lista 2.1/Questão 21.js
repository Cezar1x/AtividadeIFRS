// Questão 21. Faça um algoritmo que pede para o usuário a hora do dia e mostra quantos segundos se passaram. Por exemplo, 3h53min = 13980 segundos.

var horas = parseInt(prompt(`Digite a hora:`));
var minutos = parseInt(prompt(`Digite os minutos`));
var segundos = (horas * 3600) + (minutos * 60);

console.log(`Passaram ${segundos}, desde o começo do dia.`);