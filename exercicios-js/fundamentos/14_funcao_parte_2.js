//armazenar uma funcao em uma variavel

//1º exemplo const recebendo uma funcao anonima
const imprimirSoma = function(a, b){
    console.log(a + b)
}
//chamada da funcao
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variave/constante
const soma = (a, b) => { // o simbolo =>(arrow function) representa uma funcao
    return a + b
}
console.log(soma(7, 3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))