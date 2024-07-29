const escola = "cod3r"

console.log(escola.charAt(4))// vai mostra o caracter que ocupa o indice 4
console.log(escola.charAt(5))// como não existe essa posição no valor da variavel vai retornar vazio
console.log(escola.charCodeAt(3))//retorna o codigo unicode da tabela Asc
console.log(escola.indexOf('d'))// retorna em qual indice esta aquele caracter da palavra

console.log(escola.substring(1))// vai do indice 1 até 3, inclui o 1
console.log(escola.substring(0, 3))// vai do indice 0 até 3, mas não inclui o 3

console.log("Escola ".concat(escola).concat(" é legal!"))// concatena caracteres
console.log(escola.replace(3, "e"))// substitui o caracter do indice 3 pela letra 'e'
console.log("Ana,Maria,Pedro".split(","))//converte a string em array, utilizando a virgula como separador
