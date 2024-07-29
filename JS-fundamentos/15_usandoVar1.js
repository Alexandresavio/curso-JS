{
    {
        {
            var sera = "Será?" //A variável var  declarada em um bloco que não seja uma função, neste caso será de escopo global
            console.log(sera)
        }
    }
}

console.log(sera)

function teste(){
    var local = 123 //quando a variavel var for declarada em um boco que seja uma função, neste caso ela tem escopo de funcao (local)
    console.log(local)
}

teste()
console.log(local)// vai gerar erro pois esta fora da function!