// 7. Para doar sangue é necessário ter entre 18 e 67 anos e pesar mais de 50kg. Faça um programa que pergunta a idade e o peso do usuário e diga se ele pode doar sangue ou não.

var idade = parseInt(prompt(`Digite sua idade:`));
var peso = parseFloat(prompt(`Digite seu peso:`));

if (idade >= 18 && idade <= 67) {
    if (peso >= 50) {
        console.log(`A pessoa pode doar sangue.`);
    }
} else {
    console.log(`A pessoa não pode doar sangue.`);
}