//  Questão 46. Faça um programa que receba uma data de nascimento e que calcule que idade a pessoa terá em 01/01/2026.
//  Copiado do FriksTemmie.
//  Tirar dúvidas em aula.

var dataNascimento = String(parseInt(prompt(`Digite sua data de nascimento em DD/MM/AAAA:`)));

if (dataNascimento[0] + dataNascimento[1] == "01" && dataNascimento[2] +  dataNascimento[3] == "01") {
    console.log(`Em 01/01/2026, você terá ${2026 - (dataNascimento[4] + dataNascimento[5] + dataNascimento[6] + dataNascimento[7])}`)
}