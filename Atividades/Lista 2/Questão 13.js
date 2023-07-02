// 13. Para participar da categoria OURO do 1o. Campeonato Mundial de bolinha de Gude o jogador deve pesar entre 70 Kg (inclusive) e 80 Kg (inclusive) e medir de 1,75 m (inclusive) a 1,90 m (inclusive). Faça um programa para ler a altura e o peso de um jogador e determine se o jogador está apto a participar do campeonato escrevendo uma das seguintes mensagens conforme cada situação.
//     • RECUSADO POR ALTURA - se somente a altura do jogador for inválida;
//     • RECUSADO POR PESO - se somente o peso do jogador for inválido;
//     • TOTALMENTE RECUSADO - se a altura e o peso do jogador forem inválidos;
//     • ACEITO - se a altura e o peso do jogador estiverem dentro da faixa especificada.

var altura = parseFloat(prompt(`Digite a altura do jogador:`));
var peso = parseFloat(prompt(`Digite o peso do jogador:`));

if (altura >= 1.75 && altura <= 1.9 && peso >= 70 && peso <= 80) {
    console.log(`Jogador dentro dos padrões.`);
} else if (altura >= 1.75 && altura <= 1.9) {
    console.log(`Jogador fora dos padrões de peso.`);
} else if (peso >= 70 && peso <= 80) {
    console.log(`Jogador fora dos padrões de altura.`);
} else {
    console.log(`Jogador fora de todos os padrões.`);
}