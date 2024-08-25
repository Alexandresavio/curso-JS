//armazenar uma funcao em uma variavel

//1º exemplo constante recebendo uma funcao anonima
const imprimirSoma = function(a, b){
    console.log(`Resultado da soma = ${(a + b)}`)
}
//chamada da funcao
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel / constante
// o simbolo (=>) representa uma funcao arrow function
const soma = (a, b) => { 
    return a + b
}
console.log(`Resultado da soma = ${soma(7,3)}`)

//Função com retorno implicito, é uma arrow function com sintaxe reduzida
const subtracao = (a, b) => a - b
console.log(`Resultado da subtração = ${subtracao(5, 2)}`)

//Ainda podemos reduzir a sintaxe da arrow function mais ainda, caso esteja passando apenas um parâmetro
const imprimir2 = a => console.log(a)
imprimir2(`Mensagem: ${"legal"}`)
