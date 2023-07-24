//  Questão 60. Faça um algoritmo onde o usuário digita 3 notas e seu nome. O programa deverá calcular a média das notas e mostrar seu nome e a média com a mensagem:
//  • Inferior a 6,0 - Reprovado, faltou estudo!!!
//  • 6,1 a 6,9 - Recuperação, pode melhorar
//  • 7,0 a 8,0 - Aprovado, mas não ganha coxinha
//  • 8,1 a 9,7 – "Aprovado!"
//  • 9,8 a 10 - "Aprovado, levando a coxinha no final do semestre":-)"

var nome = prompt(`Digite seu nome:`);
var nota1 = parseFloat(prompt(`Digite a primeira nota:`));
var nota2 = parseFloat(prompt(`Digite a segunda nota:`));
var nota3 = parseFloat(prompt(`Digite a terceira nota:`));

media = (nota1 + nota2 + nota3) / 3;

if (media < 6) {
    console.log(`Reprovado, faltou estudo!!!`);
}else if (media >= 6.1 && media <= 6.9) {
    console.log(`Recuperação, pode melhorar`);
} else if (media >= 7 && media <= 8) {
    console.log(`Aprovado, mas não ganha coxinha`);
} else if (media >= 8.1 && media <= 9.7) {
    console.log(`Aprovado!`);
} else if (media >= 9,8) {
    console.log(`Aprovado, levando a coxinha no final do semestre":-)"`);
}


