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

//print all primes
function counterIsPrime(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i) !== false) {
            console.log(i);
        };
    };
    return '';
};

//Checks if a number is a twin prime and print in the screen the numbers prime
function isPrimeTwin(n) {
    let p1 = 0;
    let p2 = 0;

    for (let i = 3; i < n; i++) {
        if (isPrime(i) !== false) {
            p1 = i - p2;
            p2 = i;
            if (p1 === 2) {
                console.log(`Primos gêmeos: ${i - 2} e ${p2}`);
            };
        };
    };
    return '';
};

//Check if a string is palindromo
function isPalindromo(s) {
    const stringFomated = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    for (let i = 0; i < stringFomated.lenght / 2; i++) {
        if (stringFomated[i] !== stringFomated[stringFomated.lenght - 1 - i]) {
            return false;
        };
    };
    return true;
};


module.exports = {
    isPrime,
    isPrimeTwin,
    isPalindromo
};