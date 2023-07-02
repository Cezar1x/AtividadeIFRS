// 15. Faça um algoritmo que verifica a validade de uma senha fornecida pelo usuário. A senha válida é o número 123456. Deve ser impresso as seguintes mensagens:
//     • ACESSO PERMITIDO caso a senha seja válida;
//     • ACESSO NEGADO caso a senha seja inválida.

var senha = parseInt(prompt(`Digite a senha:`));

if (senha == 123456) {
    console.log(`Senha correta, acesso permitido.`);
} else {
    console.log(`Senha incorreta, acesso negado.`);
}