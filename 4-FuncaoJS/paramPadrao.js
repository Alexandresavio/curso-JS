//estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return (a + b + c)
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))//vai retornar 3,nesta estrtégia em especifico

//estratégia 2, 3 e 4 para gerar valor padrão
function soma2(){
    a = a !== undefined ? a:1 //estratégia 2
    b = 1 in arguments ? b:1 //estratégia 3
    c = isNaN(c) ? 1:c //estratégia 4

    return (a + b + c)
}
console.log()

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

//estratégia para gerar valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1){
    return (a + b + c)
}
console.log()

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0))

