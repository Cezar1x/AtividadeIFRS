//  Questão 62. Faça um programa para ler a idade de 5 alunos e mostrar um mensagem ao final de acordo com as instruções:
//  • Se a média de idade dos alunos for inferior de 25, apresentar a mensagem "Turma Jovem"e a idade de cada aluno.
//  • Se a média de idade dos alunos está entre 25 e 40, apresentar a mensagem "Turma Adulta"e a média das idades.
//  • Se a média de idade dos alunos está acima de 40 anos, apresentar a mensagem "Turma Idosa", mostrar a média das idades e a idade de cada aluno.

var idade1 = parseInt(prompt(`Digite a primeira idade:`));
var idade2 = parseInt(prompt(`Digite a segunda idade:`));
var idade3 = parseInt(prompt(`Digite a terceira idade:`));
var idade4 = parseInt(prompt(`Digite a quarta idade:`));
var idade5 = parseInt(prompt(`Digite a quinta idade:`));

media = (idade1 + idade2 + idade3 + idade4 + idade5) / 5;

if (media < 25) {
    console.log(`Turma Jovem:`);
    console.log(`Primeira idade: ${idade1}.`);
    console.log(`Segunda idade: ${idade2}.`);
    console.log(`Terceira idade: ${idade3}.`);
    console.log(`Quarta idade: ${idade4}.`);
    console.log(`Quinta idade: ${idade5}.`);
} else if (media >= 25 && media < 40) {
    console.log(`Turma Adulta:`);
    console.log(`A média de idade da turma é ${media}.`)
} else if (media >= 40) {
    console.log(`Turma Idosa:`);
    console.log(`A média de idade da turma é ${media}.`)
    console.log(`Primeira idade: ${idade1}.`);
    console.log(`Segunda idade: ${idade2}.`);
    console.log(`Terceira idade: ${idade3}.`);
    console.log(`Quarta idade: ${idade4}.`);
    console.log(`Quinta idade: ${idade5}.`);
}