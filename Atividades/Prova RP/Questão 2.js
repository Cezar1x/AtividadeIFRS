var tipo = prompt(`Digite "G" para Gasolina e "A" para Álcool:`);

switch (tipo) { 
    case `G`:
        var litros = parseFloat(prompt(`Digite a quantidade de litros:`)); 
        var G = litros * 5.75;
            if (G <= 20) {
                console.log(`Valor a pagar: R$ ${((G - G * 0.04).toFixed(2))}.`);
            } else if (G > 20) {
                console.log(`Valor a pagar: R$ ${((G - G * 0.06).toFixed(2))}.`);
            }
    break;

    case `A`: 
        var litros = parseFloat(prompt(`Digite a quantidade de litros:`));
        var A = litros * 4.90;
            if (A <= 20) {
                console.log(`Valor a pagar: R$ ${((A - A * 0.03).toFixed(2))}.`);
            } else if (A > 20) {
                console.log(`Valor a pagar: R$ ${((A - A * 0.05).toFixed(2))}.`);
            }
    break;

    default:
        console.log(`CÓDIGO INVÁLIDO`);
}