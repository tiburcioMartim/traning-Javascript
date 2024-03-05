function isPalindromo(frase) {
    const fraseFormatada = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < fraseFormatada.lenght; i++){
        if (fraseFormatada[i] !== fraseFormatada[fraseFormatada.lenght -1 -i]) {
            return false;
        };
    };
    return true;
};

const frase1 = 'Arara';  //true
const frase2 = 'Coelho'; //false

console.log(isPalindromo(frase1));
console.log(isPalindromo(frase2));
