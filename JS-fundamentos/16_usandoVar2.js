var numero = 1
{
    var numero = 2
    console.log(`var dentro do bloco = ${numero}`)
}

console.log(`Var fora do bloco = ${numero}`)

// Neste caso var tem escopo global, pois apesar de estar dentro de um bloco, este não é uma function