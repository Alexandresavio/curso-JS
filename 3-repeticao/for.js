/**
 * A estrutura básica de um loop for é:
 *  for (inicialização; condição; incremento ou decremento) {
        Bloco de código a ser executado
    }

 */
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/**
 * O loop for é particularmente útil para iterar sobre arrays, 
 * listas ou para realizar tarefas repetitivas com um número fixo de iterações.
 *  */ 
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}
