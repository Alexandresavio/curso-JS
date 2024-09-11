//crição do método 1
function soBoaNoticia(nota){
    if(nota >= 7){ 
     //código que deverá ser executado imediatamente após a condição retorne como verdadeira.
    console.log(`Aprovado com nota ${nota}`)
    }
}
//chamada do método 1
soBoaNoticia(8.1)


//crição do método 2
function seForVerdadeFalo(valor){
    /** como não explicitamos a condição if com algum operador, o JS entende que dentro da 
     *  variável "valor" deverá ser do tipo verdadeiro ou falso. Neste exemplo de valor
     *  for verdadeiro, deve mostrar algo no console.
     */
    if(valor){
        console.log(`é verdade... ${valor}`)
    }
}
//chamada método 2
seForVerdadeFalo()//sem parâmetro
seForVerdadeFalo(null)
seForVerdadeFalo(undefined)
seForVerdadeFalo('')//string vazia
seForVerdadeFalo(0)
seForVerdadeFalo('?')
seForVerdadeFalo([])// array vazio
seForVerdadeFalo([1, 2])
seForVerdadeFalo({})//objeto vazio