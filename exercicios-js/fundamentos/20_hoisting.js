console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)
/*
 * No exemploa acima o que o js fez foi aplicar o conceito
 * de hoisting(içamento) a 'variavel a', este é um comportamento padrão do js
 * que move a declaração para o topo na pratica ela faz isso:
 * 
 * var a = 2
 * console.log(`a = ${a}`)
 */