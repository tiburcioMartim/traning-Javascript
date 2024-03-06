//  { isPrimeTwin }   Checks if a number is a twin prime
// identificar o primo gemeo 2 caracters imediatamente ao lado. Exe.: 11 e 13
const { isPrime } = require("./lib")



const numberTest = 50
let prime1
let prime2

for (let i = 0; i < numberTest; i++) {
    if (isPrime(i) !== false) {
        prime2 = prime1 - i
        prime1 = i
        if (prime1 === 2) {
            //é primo gemeo
            console.log(isPrime(i));
        };
    };
};




