// 14. Imaginem que em uma dada disciplina, a nota final é obtida da seguinte forma: o trabalho tem peso 25% e a prova tem peso 75%. Faça um programa que calcula a nota final da disciplina. Se a nota final for inferior a 7, o programa deve imprimir a mensagem: "Precisa de exame". Caso contrário, imprime a mensagem: "Passaste com x de nota".

var notaProva = parseFloat(prompt(`Digite a nota da prova:`));
var notaTrabalho = parseFloat(prompt(`Digite a nota do trabalho:`));
var notaFinal = ((notaProva*0.75) + (notaTrabalho*0.25));

if (notaFinal >= 7){
    console.log(`Passou com a nota final de ${notaFinal}.`);
} else {
    console.log(`Repovou com a nota final de ${notaFinal}, precisa de exame.`);
}