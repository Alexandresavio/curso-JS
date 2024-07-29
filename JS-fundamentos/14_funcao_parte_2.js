//armazenar uma funcao em uma variavel

//1º exemplo constante recebendo uma funcao anonima
const imprimirSoma = function(a, b){
    console.log(a + b)
}
//chamada da funcao
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel / constante
const soma = (a, b) => { // o simbolo (=>) representa uma funcao arrow function
    return a + b
}
console.log(soma(7, 3))

//Função com retorno implicito, é uma arrow function com sintaxe reduzida
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

//Ainda podemos reduzir a sintaxe da arrow function mais ainda, caso esteja passando apenas um parâmetro
const imprimir2 = a => console.log(a)
imprimir2('LEGAL!!!!!')
