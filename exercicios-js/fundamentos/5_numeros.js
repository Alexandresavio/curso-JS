const peso1 = 1.1;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2));// parâmetro toFixed controla o número de casas decimais
console.log(media.toString(2));//converte para binário
console.log(media.toString());
console.log(typeof Number); //tipo função

console.log(7/0); //valor divido por 0 gera infinito(tipo infinity)
console.log("10"/2);

/* o operador + tbm é usado para concatenar,
   neste caso por se tratar de uma string com um número o JS vai concatenar
*/
console.log("3" + 2);
console.log("3" - 2);
console.log("10.5"/2);
console.log(0.1 + 0.7);
console.log((10.345).toFixed(2));


