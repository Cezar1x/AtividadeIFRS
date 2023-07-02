// 11. Escreva um algoritmo para ler o número de gols marcados pelo Grêmio e o número de gols marcados pelo Inter em um GRENAL. Escreva o nome do vencedor. Caso não haja vencedor, mostre na tela uma mensagem de EMPATE.

var golsGremio = parseInt(prompt(`Digite a quantidade de gols do Grêmio:`));
var golsInternacional = parseInt(prompt(`Digite a quantidade de gols do Internacional`));

if (golsGremio > golsInternacional){
    console.log(`Grêmio foi o vencedor do jogo.`);
} else if (golsInternacional > golsGremio){
    console.log(`Internacional foi o vencedor do jogo.`);
} else if (golsGremio = golsInternacional) {
    console.log(`O jogo terminou em empate.`);
}