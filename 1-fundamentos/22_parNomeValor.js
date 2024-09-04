
//par nome/valor
const saudacao = "Opa!" //contexto léxico 1

function exec(){
    const saudacao = `Falaaaaaa, Alexandre!` //contexto léxico 2
    return saudacao
}
console.log(`${saudacao} Sávio`)
console.log(exec())

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Sávio",
    idade: 40,
    peso: 65,
    endereco: {
        logradouro: "Rua XPTO",
        numero: 428
    }
}
console.log(cliente)