// 5. A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, se o índice crescer para 0,4 as indústrias do 1º e 2º grupo são intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades. Faça um algoritmo que leia o índice de poluição medido e emita a notificação adequada aos diferentes grupos de empresas.

var poluicao = parseFloat(prompt(`Digite o nível de poluição.`));

if (poluicao >= 0.5) {
    console.log(`O todos os grupo devem suspender suas atividades, por conta de alto nível de poluição.`);
} else if (poluicao >= 0.4) {
    console.log(`O primeiro e o segundo grupo devem suspender suas atividades, por conta de alto nível de poluição.`);
} else if (poluicao >= 0.3) {
    console.log(`O primeiro grupo deve suspender suas atividades, por conta de alto nível de poluição.`);
} else {
    console.log(`O nível de poluição está normal`);
}