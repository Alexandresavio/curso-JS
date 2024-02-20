/*
 * console.log(typeof Object)
 *
 * class Produto{
 *   //teste tipo
 * }
 * console.log(typeof Produto)
 */


//Function (Função): Representa um bloco de código reutilizável.

//1º exemplo Funcao sem retorno:
function imprimirSoma(valor1, valor2){
    console.log(valor1 + valor2)
}
imprimirSoma(2, 3)// passei dois parametros o JS faz a soma
imprimirSoma(2)// passando apenas um parametro, outro será intrepretado como undefine, resultado NAN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)// passei mais de dois parametros o JS faz a soma dos dois primeiros e ignora o restante
imprimirSoma()// passando nenhum parametro, será intrepretado como undefine, resultado NAN

//2º exemplo: Funcao com retorno
function somar(a, b=0) {
    return(a + b)
  }
  console.log(somar(2, 8))// chamo a função somar e passo os dois parametros
  console.log(somar(3))// passando apenas um parametro, como um parametro está definido com valor 0 na função, resultado sera a soma
  console.log(somar())// passando nenhum parametro, será intrepretado como undefine, resultado NAN