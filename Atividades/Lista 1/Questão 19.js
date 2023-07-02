// 19. Ler dois valores para as variáveis a e b e efetuar a troca dos valores de forma que a variável a passe a possuir o valor da variável b e a variável b passe a possuir o valor da variável a. Apresentar os valores após a efetivação do processamento da troca.

var a = parseFloat(prompt(`Digite o valor "a":`));
var b = parseFloat(prompt(`Digite o valor "b":`));

[a,b] = [b,a];

console.log(`O valor de "B" agora é ${a} e o de "A" é ${b}.`);