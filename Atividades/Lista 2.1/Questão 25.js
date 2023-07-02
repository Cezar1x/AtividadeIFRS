// Questão 25. Elabore um algoritmo que indique se o número digitado está entre o intervalo 10 e 20, ou 21 e 30 ou se o número é maior que 90.

var numero = parseFloat(prompt(`Digite o número:`));

if (numero >= 10 && numero <= 20) {
    console.log(`O número está entre 10 e 20.`); 
} else if (numero >= 21 && numero <= 30) {
    console.log(`O número está entre 21 e 30.`);
} else if (numero > 90) {
    console.log(`O número é maior que 90.`);
} else {
    console.log(`O número está fora dos intervalos especificados.`);
}