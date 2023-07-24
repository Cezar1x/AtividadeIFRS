// Questão 70. Faça um programa para o jogo de adivinhação do número secreto. O jogador terá 3 chances para acertar o número indicado por outro jogador e recebe dicas do tipo: "o valor digitado é maior"ou "o valor digitado é menor".
// Feito com ajuda de um Dev Sênior.


var numeroSecreto = parseFloat(prompt(`Valor do número secreto.`));

for (i = 0; i <= 3; i++) {
    var numero = parseFloat(prompt(`Digite o numero correto.`));

    if (numero == numeroSecreto) {
        console.log(`Acertou o número.`);
        break;
    }
    if (numero < numeroSecreto) {  
        console.log(`O valor digitado é maior.`);
        continue;
    }
    console.log(`O valor digitado é menor.`);
}   