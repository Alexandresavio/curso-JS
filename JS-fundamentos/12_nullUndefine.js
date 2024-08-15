
let valor // variavel declarada porém não foi inicializada, ou seja declaramos mas não setamos o valor (undefined)
console.log(valor)

valor = null //variavel declarada e inicializada, porém foi atribuido o valor null(ausência de valor)
console.log(valor)

//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)//o objeto produto acessou o atributo, porém ele não está declarado, esta undefined
console.log(produto)// objeto produto esta vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)// retorna false
console.log(produto) //produto esta undefined

produto.preco = null//sem preço
console.log(!!produto.preco)
console.log(produto)