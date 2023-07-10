//Questão 56. Uma livraria fez uma promoção para pagamento à vista, onde o comprador pode escolher entre dois critérios de desconto:
//            • Critério A: R$0,25 por livro + R$7,50 fixo
//            • Critério B: R$0,50 por livro + R$2,50 fixo
//Faça um programa em que o usuário digita a quantidade de livros que deseja comprar e o programa diz qual a melhor opção de desconto.

var criterio = prompt(`Digite se quer o "Critério A" ou "Critério B":`);

switch (criterio){
    case `Criterio A`:
        var quantidadeLivros = parseInt(prompt(`Digite a quantidade de livros:`));


        break;

    case `Criterio B`:
        var quantidadeLivros = parseInt(prompt(`Digite a quantidade de livros:`));


        break;
    
    default:
        console.log(`Critério inválido.`);
}