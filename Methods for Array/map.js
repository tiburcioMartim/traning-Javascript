//map
//Posso retornar uma lista html
//Arrow function não tem corpo de return então pode-se ignorar  <{return ...}>
class People {
    constructor(name){
        this.name = name
    }
}

const list = [new People('Martim'), new People
('Marcelly'), new People('Pedro'), new People('Davi'), new People('Sophie'), new People('João'), new People('Maria'),];

const newList = list.map((element => element.name))

console.log(newList);


                // FORMA DIFÍCIL DE FAZER O MAPEAMENTO
                // const newList = []

                // for (let i = 0; i < list.length; i++) {
                //     const element = list[i];
                //     newList.push(element.name)
                // }

                // console.log(newList);