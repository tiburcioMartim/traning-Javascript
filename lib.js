//  (...args) é usado para representar um número indefinido de argumentos passados para uma função como um array. 
//Esse operador é chamado de "rest parameter" (parâmetro rest) e 
//permite que uma função receba um número variável de argumentos em forma de array.

//Criar uma função que imprime 'Hello Word'
const helloWord = function hello() {
    return function (...args) {
        return '                                                                                                                Hello Word';
    }
}

const outHello = helloWord() // instanciando a function helloWord para pode exibir seu conteúdo
console.log(outHello())






//================================{ (IIFE) IMMEDIATELY INVOKED FUNCTION EXPRESSION ================================//
/*
Para chamar uma função anônima em JavaScript sem atribuí-la a uma variável, 
você pode simplesmente envolver a definição da função anônima entre parênteses 
e adicionar () no final para invocá-la imediatamente. Esse padrão é conhecido 
como IIFE (Immediately Invoked Function Expression).

Porém está dando conflito com o console.log acima
*/
// IIFE Immmediately Invoked Function Expression
(function funcOne(){
    return console.log('Hello World')
}) ();





//====================================={ REFATORADO PARA ARROW FUNCTION }=====================================//

const oiMundo = () => (...args) => 'Hello Word'; // Criando uma instância da função retornada
const saidaOi = oiMundo(); // Chamando a função retornada
console.log(saidaOi()); // Output: 'Hello Word'
