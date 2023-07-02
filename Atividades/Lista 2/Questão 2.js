// 2. Elabore um algoritmo que leia as variáveis cod e num, respectivamente código e número de horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário excedente.

var numeroHoras = parseFloat(prompt(`Digite o número de horas:`));

if (numeroHoras > 50) {
    var salarioTotal = 500 + (numeroHoras - 50) * 20;
    var salarioExcedente = (numeroHoras - 50) * 20;

    console.log(`O salário total é ${salarioTotal} reais.`);
    console.log(`O salário excedente é ${salarioExcedente} reais.`);
} else {
    var salarioTotal = numeroHoras * 10;
    
    console.log(`O salário total é ${salarioTotal} reais.`);
    console.log(`O salário não é excedido`);
}