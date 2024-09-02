const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(`i = ${notas[i]}`)
}

/**
 * A estrutura for...in em JavaScript é usada para iterar sobre as 
 * propriedades enumeráveis de um objeto. Ela percorre cada propriedade
 * do objeto e permite acessar tanto o nome da propriedade quanto o
 * valor associado a ela.
 */

/**
 * Aqui está a sintaxe básica do for...in:
 *  for (let key in object) {
          // código a ser executado para cada propriedade
    }
 */

//instaciando objeto pessoa
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso:64

}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}