//Checks if a number is a twin prime
// identificar o primo gemeo 2 caracters imediatamente ao lado. Exe.: 11 e 13
const qtTestes = 50

for (let i = 0; i < qtTestes; i++) {
    function isPrime(n) {
        if (n <= 1) {
            return false
        };

        for (let j = 2; j <= Math.sqrt(n); j++) {
            if (n % j === 0) {
                return false;
            };
        };
        return n;
    };

    if (isPrime(n) === false) {
        break;
    } else {
        console.log(i);
    };
};