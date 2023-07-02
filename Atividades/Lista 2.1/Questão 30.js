// Questão 30. Para doar sangue é necessário ter entre 18 e 67 anos, pesar mais de 50kg, estar em jejum e ter documento com foto. O usuário não pode doar se teve hepatite após os 10 anos, verifique essa questão e ao final indique se o usuário pode doar sangue ou não.

var hepatite = promp(`Usuário teve hepatite após os 10 anos?`);

if (hepatite == `não` || hepatite == `nao`) {
    var documentoFoto = prompt(`A pessoa trouxe documento com foto?`);
    if (documentoFoto === `sim`) {
        var jejum = prompt(`Digite se a pessoa fez ou não jejum:`);
        if (jejum === `sim`) {
            var idade = parseFloat(prompt(`Digite a idade:`));
            var peso = parseFloat(prompt(`Digite o peso:`));
            if (idade >= 18 && idade <= 67 && peso >= 50) {
                console.log(`Está apto para doar sangue.`);
            } else {
                console.log(`Não está apto para doar sangue.`);
            }
        } else {
            console.log(`Não está apto para doar sangue.`);
        }
    } else {
        console.log(`Não está apto para doar sangue.`);
    }
} else {
    console.log(`Não está apto para doar sangue.`);
}
