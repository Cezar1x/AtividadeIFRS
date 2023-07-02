// Questão 26. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que pergunte a idade do usuário e diga se ele pode doar sangue ou não.

var idade = parseFloat(prompt(`Digite a idade:`));

if (numero >= 18 && numero <=67) {
    console.log(`A idade é permtida para doar sangue.`); 
} else {
    console.log(`A idade é não permtida para doar sangue.`);
}