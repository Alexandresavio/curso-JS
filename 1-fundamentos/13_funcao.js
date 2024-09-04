
/*
 * console.log(typeof Object)
 *
 * class Produto{
 *   //teste tipo
 * }
 * console.log(typeof Produto)
 */


//Function (Função): É um verbo (ação) que representa um bloco de código reutilizável.

//1º exemplo Funcao sem retorno:
function imprimirSoma(valor1, valor2){
    console.log(`Resultado da soma = ${valor1 + valor2}`)
}
//chamada da função e passagem de argumentos
imprimirSoma(2, 3)// passei dois parametros e a função faz a soma
imprimirSoma(2)// passando apenas um parametro, outro será intrepretado como undefined, resultado NAN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// passei mais de dois parametros o JS faz a soma dos dois primeiros e ignora o restante
imprimirSoma()// passando nenhum parametro, será intrepretado como undefined, resultado NAN

//2º exemplo: Funcao com retorno
function somar(a, b=1) {
    return(a + b)
  }
  console.log(`Resulta da soma = ${somar(2, 8)}`)// chamo a função somar e passo os dois parametros
  console.log(`Resultado da soma = ${somar(3)}`)// passando apenas um parametro, como um parametro está definido com valor 1(também poderia ser 0) na função, resultado sera a soma
  console.log(`Resultado da soma = ${somar()}`)// passando nenhum parametro, será intrepretado como undefine, resultado NAN
