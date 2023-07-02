// 10. Lê o raio de um círculo e mostre como saída o perímetro (2 x π x Raio) e a área (π x Raio²).

var raio = parseFloat(prompt(`Digite o raio:`));

console.log(`O perímetro é ${((2*3.14)*raio)}.`);
console.log(`A área é ${((raio**2)*3.14)}.`);