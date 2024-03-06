//Checks if a number is prime 

function isPrime(n) {
  if (n <= 1) {
    return false
  };

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    };
  };
  return true;
};

const num1 = 9; //false
const num2 = 11; //true

console.log(isPrime(num1));
console.log(isPrime(num2));
