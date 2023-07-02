// 30. Em uma eleição sindical concorreram ao cargo de presidente três candidatos (representados pelas variáveis a, b e c). Durante a apuração dos votos foram computados votos nulos e em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que faça a leitura da quantidade de votos válidos para cada candidato, além de também ler a quantidade de votos nulos e em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato a em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato b em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato c em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.
// Copiado do FriskTemmie

const candidadateA = parseInt(prompt("Type here the number of valid votes for candidate A."));
const candidadateB = parseInt(prompt("Type here the number of valid votes for candidate B."));
const candidadateC = parseInt(prompt("Type here the number of valid votes for candidate C."));
const nullV = parseInt(prompt("Type here the number of null votes."));
const whiteV = parseInt(prompt("Type here the number of white votes."));
const numberOfVoters = candidadateA + candidadateB + candidadateC + nullV + whiteV;

console.log(`The number of voters is ${numberOfVoters}.`);
console.log(`The valid votes where ${(candidadateA + candidadateB + candidadateC) / numberOfVoters * 100}% of votes`);
console.log(`Candidate A received ${candidadateA / numberOfVoters * 100}% of votes`);
console.log(`Candidate B received ${candidadateB / numberOfVoters * 100}% of votes`);
console.log(`Candidate C received ${candidadateC / numberOfVoters * 100}% of votes`);
console.log(`The null votes where ${nullV / numberOfVoters * 100}% of votes`);
console.log(`The white votes where ${whiteV / numberOfVoters * 100}% of votes`);
