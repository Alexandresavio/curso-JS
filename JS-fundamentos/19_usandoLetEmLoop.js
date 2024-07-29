
console.log("Contando...") 
    for(let i = 0; i < 10; i++){
        console.log(i) //Let i tem escopo de bloco e estará visivel somente dentro do bloco for
    }
console.log("Terminei de contar.")

console.log(`for do bloco = ${i}`)//vai gerar um erro! Pois Let i tem escopo de bloco e não estará visivel fora do bloco