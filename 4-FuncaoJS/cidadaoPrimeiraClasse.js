//Função em JS é First-Class Object (Citizens)
//Higher-order function
// Em JS função é um tipo de dado

/**
 *  criar um função de forma literal
 *  <function> <nomeDaFuncao(parâmetros...)><{}>
 */
function fun1(){

}
//Armazenar uma função anônima em uma variavel / const
const fun2 = function(){

}

//armazenar uma função em um array
const array = [function (a, b){return a + b}, fun1, fun2]