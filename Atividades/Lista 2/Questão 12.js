//12. Faça um algoritmo onde o usuário digita 3 notas e seu nome. O programa deverá calcular a média das notas e mostrar seu nome e a média com a mensagem:
//    • Inferior a 6,0 - Reprovado, faltou estudo!!!
//    • 6,1 a 6,9 - Recuperação, pode melhorar
//    • 7,0 a 8,0 - Aprovado, mas não ganha coxinha
//    • 8,1 a 9,7 – "Aprovado!"
//    • 9,8 a 10 - "Aprovado, levando a coxinha no final do semestre":-)"

var nota = parseFloat(prompt(`Digite a nota:`));

if (nota >= 9.8 && nota <= 10) {
    console.log(`Aprovado, levando a coxinha no final do semestre.`);
} else if (nota >= 8.1 && nota <= 9.7) {
    console.log(`Aprovado!.`);
} else if (nota >= 7.0 && nota <= 8.0) {
    console.log(`Aprovado, mas não ganha coxinha.`);
} else if (nota >= 6.9 && nota <= 6) {
    console.log(`Recuperação, pode melhorar.`);
} else if (nota < 6) {
    console.log(`Reprovado, faltou estudo!!!.`);
}
