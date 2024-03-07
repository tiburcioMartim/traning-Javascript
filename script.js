//  { isPrimeTwin }   Checks if a number is a twin prime
// identificar o primo gemeo 2 caracters imediatamente ao lado. Exe.: 11 e 13
const { isPrime } = require("./lib")

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
};

console.log(isPrimeTwin(50))