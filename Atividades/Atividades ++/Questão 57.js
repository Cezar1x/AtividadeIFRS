//Questão 57. Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//            • Para homens: (72.7*h) – 58
//            • Para mulheres: (62.1*h) – 44.7

var sexo = prompt(`Digite se o sexo é "Masculino" ou "Feminino":`);

switch (sexo) {
    case `Masculino`:
        var altura = parseFloat(prompt(`Digite a altura do homem:`));
        altura = altura / 100;
        console.log(`O peso ideal seria: ${(((72.7 * altura) - 58).toFixed(2))}.`);

        break;

    case `Feminino`:
        altura = altura / 100;
        var altura = parseFloat(prompt(`Digite a altura da mulher:`));
        console.log(`O peso ideal seria: ${(((62.1 * altura) - 44.7).toFixed(2))}.`);
     
        break;

    default:
        console.log(`Sexo invalido.`)
}