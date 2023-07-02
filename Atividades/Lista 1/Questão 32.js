// 32. Construir um programa que calcule e apresente em metros por segundo o valor da velocidade de um projétil que percorre uma distância em quilômetros a um espaço de tempo em minutos. Utilize a equação velocidade = (distancia x 1000) : (tempo x 60) aritméticas básicas.

var distancia = parseFloat(prompt(`Digite a distância em quilômetros:`));
var tempo = parseFloat(prompt(`Digite o tempo em minutos:`));
var velocidade = (distancia*1000) / (tempo*60);

console.log(`A velocidade do projétil é de ${velocidade}km/h.`);