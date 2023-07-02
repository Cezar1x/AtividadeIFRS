// Questão 22. A prefeitura de Porto Alegre abriu uma linha de crédito para os funcionários estatutários. O valor máximo da prestação não poderá ultrapassar 30% do salário bruto. Elabore um algoritmo que permita entrar com o salário bruto e o valor da prestação e informar se o empréstimo pode ou não ser concedido.

var salarioBruto = parseFloat(prompt(`Digite o salário bruto:`));
var prestacao = parseFloat(prompt(`Digite o valor da prestação:`));

if (prestacao > salarioBruto * 0.3){
    console.log(`O empréstimo não foi permitido.`);
} else {
    console.log(`O empréstimo foi permitido.`);
}