{
    {
        {
            /**
             * As variáveis declaradas com var têm escopo de função ou escopo global,
             * o que significa que são visíveis em toda a função em que são declaradas.
             */
            var sera = "Será?" 
            console.log(`Variavel VAR de escopo de bloco = ${sera}`)
        }
    }
}

console.log(`Variavel VAR de escopo fora do bloco (Global) = ${sera}`)

/**
 * quando a variavel do tipo var for declarada em um boco que seja uma função,
 * neste caso ela estará visivel apenas no bloco da função, ou seja tem escopo de funcao
 */
function teste(){
    var local = 123 
    console.log(`Variavel VAR com escopo de função = ${local}`)
}
//chamada da função
teste()
// vai gerar erro pois esta fora da function!
console.log("")
console.log(`Variavel VAR com fora do escopo de função = ${local}`)
