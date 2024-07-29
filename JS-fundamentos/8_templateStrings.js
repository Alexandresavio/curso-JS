const nome = "Rebeca";

//Utilizando concatenação
console.log("Olá "+nome+("!"));

//utilizando template
const template = `Olá ${nome}, tudo bom?`;
console.log(template);

//expressões-> soma apenas o que está entre chaves 
console.log(`1 + 1 = ${1 + 1}`);

//função arrow
const up = texto => texto.toUpperCase()
console.log(`Ei...${up(`cuidado`)}!`)