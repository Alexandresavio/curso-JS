
/* Escopo de bloco: As variáveis declaradas com let têm escopo de bloco, 
 * o que significa que são visíveis apenas dentro do bloco em que são declaradas, 
 * incluindo blocos if, loops for, while, etc.
 */

let numero = 1

{
    let numero = 2
    console.log(`Variável Let com escopo de bloco = ${numero}`)
}

console.log(`Variável Let com escopo global = ${numero}`)