//6. Elabore um algoritmo que dada a idade de um nadador classifique-o em uma das seguintes categorias:
//   • Infantil A = 5 a 7 anos;
//   • Infantil B = 8 a 11 anos;
//   • Juvenil A = 12 a 13 anos;
//   • Juvenil B = 14 a 17 anos;
//   • Adultos = Maiores de 18 anos.

var idade = parseInt(prompt(`Digite a idade:`));

if (idade >= 18) {
    console.log(`Os nadadores fazem parde da calssificação de adultos.`);
} else if (idade >= 14 && idade <= 17) {
    console.log(`Os nadadores fazem parde da calssificação juvenil B.`);
} else if (idade >= 12 && idade <= 13) {
    console.log(`Os nadadores fazem parde da calssificação juvenil A.`);
} else if (idade >= 8 && idade <= 11) {
    console.log(`Os nadadores fazem parde da calssificação infantil B.`);
} else if (idade >= 5 && idade <= 7) {
    console.log(`Os nadadores fazem parde da calssificação infantil A.`);
}
