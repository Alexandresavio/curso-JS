{
    {
        {
            /**
             * As variáveis declaradas com var têm escopo de função ou escopo global,
             * o que significa que são visíveis em toda a função em que são declaradas.
             */
            var sera = "Será?" 
            console.log(`escopo de bloco = ${sera}`)
        }
    }
}

console.log(`escopo fora do bloco (Global) = ${sera}`)

//quando a variavel var for declarada em um boco que seja uma função, neste caso ela tem escopo de funcao (local)
function teste(){
    var local = 123 
    console.log(`Variavel com escopo de função = ${local}`)
}

teste()
// vai gerar erro pois esta fora da function!
console.log(`Variavel com fora do escopo de função = ${local}`)