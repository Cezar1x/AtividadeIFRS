// Questão 58. Escreva um algoritmo para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. Escreva o nome do vencedor. Caso não haja vencedor, mostre na tela uma mensagem de EMPATE.

var golsGremio = parseInt(prompt(`Digite a quantidade de gols do Grêmio:`));
var golsInter = parseInt(prompt(`Digite a quantidade de gols do Inter:`));

if (golsGremio > golsInter) {
    console.log(`Grêmio ganhou.`);
} else if (golsGremio < golsInter) {
    console.log('Inter ganhou.');
} else if (golsGremio == golsInter) {
    console.log(`Terminou em emprate.`);
}