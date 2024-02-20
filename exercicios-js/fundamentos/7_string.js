const escola = "cod3r"

console.log(escola.charAt(3))
console.log(escola.charAt(5))// como não existe essa posição no valor da variavel vai retornar vazio
console.log(escola.charCodeAt(3))//retorna o codigo unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 2))// vai do indice 0 até 2, mas não inclui o 2

console.log("Escola ".concat(escola).concat(" é legal!"))
console.log(escola.replace(3, "e"))
console.log("Ana,Maria,Pedro".split(","))//converte a string em array, com a virgula como separador
