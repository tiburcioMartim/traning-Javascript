/*
Vamos tentar um exercício um pouco mais desafiador para praticar sua lógica de programação em JavaScript. Vamos criar um programa que verifica se uma frase é um palíndromo, ou seja, se ela é a mesma quando lida da esquerda para a direita e vice-versa, desconsiderando espaços, pontuação e diferenciação entre maiúsculas e minúsculas.

Aqui está um exemplo de como você pode implementar essa verificação de palíndromo em JavaScript:
*/



//Estudar o comprotamento deste algoritmo.
//Verificador se uma palavra é palíndromo

function verificarPalindromo(frase) {
    // Remover espaços, pontuação e transformar tudo em minúsculas
    const fraseFormatada = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Verificar se a frase formatada é um palíndromo
    for (let i = 0; i < fraseFormatada.length / 2; i++) {
        if (fraseFormatada[i] !== fraseFormatada[fraseFormatada.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

// Exemplo de uso:
const frase1 = "Anotaram a data da maratona";
const frase2 = "Teste de palindromo";

console.log(verificarPalindromo(frase1)); // Saída: true
console.log(verificarPalindromo(frase2)); // Saída: false




/*
Neste exercício, a função `verificarPalindromo` recebe uma frase, formata-a removendo espaços e pontuações e verifica se ela é um palíndromo. Você pode testar diferentes frases para ver se o programa identifica corretamente os palíndromos. Este desafio ajuda a praticar manipulação de strings, estruturas de repetição e lógica de comparação em JavaScript.
*/