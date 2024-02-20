const arrayValores = [7.7, 8.9, 6.3, 9.2] //em js o array é dinamico, não é necessário definir seu tipo ou tamanho
console.log(arrayValores[0], arrayValores[3])// mostra o elemento de indice [0] o de indice[3]
console.log(arrayValores[4]);// não existe o indice [4] no array, o js retorna undefined

arrayValores[4] = 10;
console.log(arrayValores[4]);

console.log(arrayValores);
console.log(arrayValores.length);

//push() e pop(): Adiciona e remove elementos no final do array, respectivamente.
arrayValores.push({id:3}, false, null, "teste");
console.log(arrayValores);
console.log(arrayValores.pop());

delete arrayValores[0];
console.log(arrayValores);

console.log(typeof arrayValores);
