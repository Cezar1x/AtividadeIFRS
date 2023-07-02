// Questão 28. Para doar sangue é necessário ter entre 18 e 67 anos, pesar mais de 50kg e estar em jejum. Faça um programa que pergunta a idade, peso do usuário e se ele está em jejum, diga se o usuário pode doar sangue ou não.

var jejum = prompt(`Digite se a pessoa fez ou não jejum:`);

if (jejum == `sim`){
    var idade = parseFloat(prompt(`Digite a idade:`));
    var peso = parseFloat(prompt(`Digite o peso:`));

    if (idade >= 18 && idade <= 67 && peso >= 50) {
        console.log(`Está apto para doar sangue.`);
    } else {
        console.log(`Não está apto para doar sangue.`);
    }
} else {
    console.log(`Não está apto para doar sangue.`);
}