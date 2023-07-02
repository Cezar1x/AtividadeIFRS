// 10. Uma livraria fez uma promoção para pagamento à vista, onde o comprador pode escolher entre dois critérios de desconto:
//     • Critério A: R$0,25 por livro + R$7,50 fixo;
//     • Critério B: R$0,50 por livro + R$2,50 fixo;
// Faça um programa em que o usuário digita a quantidade de livros que deseja comprar e o programa diz qual a melhor opção de desconto.

var livros = parseInt(prompt(`Digite a quantidade de livros:`));
var criterioA = (0.25 * livros) + 7.50;
var criterioB = (0.50 * livros) + 2.50;

if (criterioA < criterioB) {
    console.log(`A melhor opção é o Critério A`);
} else if (criterioB < criterioA) {
    console.log(`A melhor opção é o Critério B`);
} else {
    console.log(`O desconto será o mesmo.`);
}