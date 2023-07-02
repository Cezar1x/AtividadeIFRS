// 1. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um algoritmo que leia a variável peso_peixes (peso de peixes) e verifique se há excesso. Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo ZERO. Ao final imprima todas as variáveis com os devidos comentários para que façam sentido. 

var pesoPeixes = parseFloat(prompt(`Digite o peso do peixe:`));

if (pesoPeixes > 50) {
    var excesso = pesoPeixes - 50;
    var multa = excesso * 4;

    console.log(`O peso do peixe excede o limite permitido.`);
    console.log(`Peso de peixes: ${pesoPeixes} quilos.`);
    console.log(`Excesso de peso: ${excesso} quilos.`);
    console.log(`Multa a pagar: ${multa} reais.`);
} else {
    console.log(`O peso do peixe não excede os limites permitidos.`);
}