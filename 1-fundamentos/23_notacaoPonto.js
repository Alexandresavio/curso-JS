console.log(Math.ceil(6.1))

const obj1 ={}//instaciando objeto vazio
obj1.nome = "Bola" // criando atributo 'nome' dinâmicamente para o objeto 
obj1['idade'] = 43+' anos '//Outra forma de criar atributos dinâmicamente
console.log(obj1.nome)
console.log(obj1.idade)

function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Exec...")
    }
}

const obj2 = new obj("Cadeira")
const obj3 = new obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()