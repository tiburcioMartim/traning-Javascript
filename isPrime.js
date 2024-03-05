function isPrime(n){
  function(n){
    if (n <= 1){
      return false
    };
  };

  function(n){
    for (let i = 0; i <= Math.sqrt(n)) {
      if (n % i === 0) {
        return false
      };
    };
  };
  return true;
};

const num1 = 9; //false
const num2 = 11 //true

console.log(isPrime(num1));
console.log(isPrime(num2));
