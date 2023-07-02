// Questão 24. Elabore um algoritmo que indique se o número digitado está entre o intervalo 20 e 30, 50 e 60 ou está fora desses intervalos.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero >= 20 && numero <=30 || numero >= 50 && numero <= 60) {
    console.log(`O número está dentro do intervalo.`); 
} else {
    console.log(`O número está fora do intervalo.`);
}