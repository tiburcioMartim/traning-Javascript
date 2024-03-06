//Check if a number is prime
function isPrime(n) {
    if (n <= 1) {
        return false
    };

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        };
    };
    return n;
};

//Check if a string is palindromo
function isPalindromo(s) {
    const stringFomated = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < stringFomated.lenght / 2; i++){
        if (stringFomated[i] !== stringFomated[stringFomated.lenght -1 -i]) {
            return false;
        };
    };
    return true;
};

module.exports = { isPrime, isPalindromo };