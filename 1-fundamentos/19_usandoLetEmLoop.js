
console.log("Contando...") 

//Let i tem escopo de bloco e estará visivel somente dentro do bloco for
    for(let i = 0; i <= 10; i++){
        console.log(i) 
    }
console.log("Terminei de contar.")

//vai gerar um erro! Pois Let i tem escopo de bloco e não estará visivel fora do bloco
console.log(`for do bloco = ${i}`)