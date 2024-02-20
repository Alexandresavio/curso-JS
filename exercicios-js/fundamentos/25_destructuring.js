//novo recurso ES2015
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro:"Rua xpto",
        numero:100
    }
}

const{nome, idade} = pessoa // estou extraindo do objeto pessoa o atributo nome e o atributo idade
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //estou extraindo do objeto pessoa o atributo nome e o atributo idade, agora criei variáveis com a letra 'e' e 'i'
console.log(n, i)

const{sobrenome, bemHumorada = true} = pessoa // os atributos 'sobrenome' e bemHumorada não existem no objeto, posso por padrão dá para inferir
console.log(sobrenome, bemHumorada)           // que ele vai retornar algo como undenifined, exceto 'bemHumorada que esta recebendo true'

const {endereco:{logradouro, numero, cep}}= pessoa 
console.log(logradouro, numero, cep)