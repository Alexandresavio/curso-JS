const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Utilizando Break')
//for irá varrer todo o array mostrando so indices
for(x in nums){
    if(x == 5){
        break // quando x for igual a 5 irá saltar do bloco if
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log()

console.log('Utilizando Continue')
for(y in nums){
    if(y == 5){
        continue //irá saltar para o 6 e não mostrará o 5 no console
    }
    console.log(`${y} = ${nums[x]}`)

}