// Questão 29. Para doar sangue é necessário ter entre 18 e 67 anos, pesar mais de 50kg, estar em jejum e ter documento com foto. Faça um programa que pergunta a idade, peso do usuário, se ele está em jejum e se tem documento. Ao final, indique se o usuário pode doar sangue ou não.

var documentoFoto = prompt(`A pessoa trouxe documento com foto?`);

if (documentoFoto === `sim`) {
    var jejum = prompt(`Digite se a pessoa fez ou não jejum:`);
    if (jejum === `sim`) {
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
} else {
    console.log(`Não está apto para doar sangue.`);
}