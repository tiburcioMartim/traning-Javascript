const helloWord = function hello() {
    return function (...args) {
        return 'Hello Word';
    }
}

const outHello = helloWord()

console.log(outHello())





const oiMundo = () => (...args) => 'Hello Word'; // Criando uma instância da função retornada

const saidaOi = oiMundo(); // Chamando a função retornada

console.log(saidaOi()); // Output: 'Hello Word'