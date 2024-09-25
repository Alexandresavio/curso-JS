//Função em JS é First-Class Object (Citizens)
//Higher-order function
// Em JS função é um tipo de dado

/**
 *  criar um função de forma literal
 *  function nomeDaFuncao(parâmetros...){}
 */
function fun1(){

}
//Armazenar uma função anônima em uma variavel / const
const fun2 = function(){

}

//armazenar uma função em um array
const array = [function (a, b){return a + b}, fun1, fun2]
console.log(`Total da soma = ${array[0](2,3)}`)//chamada da const array passando os indices do array e os argumentos da função

//armazenar uma função em um atributo de um objeto
const obj = {}
obj.falar = function(){return 'Opa!'}
console.log(`Saudação ${obj.falar()}`)

// Passar uma função como parâmetro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter função
/**
 * No exemplo abaixo Soma  recebe dois parâmetros a e b só que aa invés de retornar o resultado de soma (a+b),
 * retornei  uma terceira função(c) que recebe um outro parâmetro e só aí quando tiver os três parâmetros é que
 * eu vou invocar e passar aqui a b c vou somar os três valores.
 *
 */
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
//chamada
soma(2, 3)(4)