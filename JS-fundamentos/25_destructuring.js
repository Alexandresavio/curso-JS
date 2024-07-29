//novo recurso ES2015

//criando objeto pessoa
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro:"Rua xpto",
        numero:100
    }
}

//Destructuring de Objeto:
const{nome, idade} = pessoa // estou extraindo do objeto pessoa o atributo nome e o atributo idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //estou extraindo do objeto pessoa o atributo nome e o atributo idade, agora criei variáveis com a letra 'e' e 'i'
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa // os atributos 'sobrenome' e bemHumorada não existem no objeto, por padrão dá para inferir
console.log(sobrenome, bemHumorada)           // que ele vai retornar algo como undenifined, exceto 'bemHumorada que esta recebendo true'

const {endereco:{logradouro, numero, cep}}= pessoa // estou extraindo do objeto endereco, os atributos logradouro, numero e criei um atributo
console.log(logradouro, numero, cep)               //atributo cep que irá retornar undefined

//Destructuring de Array:
const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0]= [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const[, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

 /* Destructuring de função
  *  Exemplo:
  *  A função abaixo vai retornar um número aleatório e aí eu vou passar pra ele 
  * dois atributos só que dentro de um operador destructuring('{}').
  */
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))