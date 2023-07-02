// 29. Elaborar um programa que leia o valor numérico correspondente ao salário mensal (variável sm) de um trabalhador e também faça a leitura do valor do percentual de reajuste (variável pr) a ser atribuído. Apresentar o valor do novo salário (variável ns).

var sm = parseInt(prompt(`Digite o valor do salário mensa:`));
var pr = parseInt(prompt(`Digite o valor do percentual de reajuste:`));
var ns = (sm*pr);

console.log(`O salário depois do reajuste ficou ${ns}.`)