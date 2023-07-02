// Questão 27. Para doar sangue é necessário ter entre 18 e 67 anos e pesar mais de 50kg. Faça um programa que pergunta a idade e o peso do usuário e diga se ele pode doar sangue ou não.var idade = parseFloat(prompt(`Digite a idade:`));

var idade = parseFloat(prompt(`Digite a idade:`));
var peso = parseFloat(prompt(`Digite o peso:`));

if (numero >= 18 && numero <=67 && peso >= 50) {
    console.log(`Está apto a para doar sangue.`); 
} else {
    console.log(`Não está apto a para doar sangue.`);
}