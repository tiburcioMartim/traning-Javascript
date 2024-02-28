let varOne = function funcOne(n){
    counter = n
    return function funcTwo(){
        return counter++
    }
}

let varTwo = varOne(10)

console.log(varTwo())
console.log(varTwo())
console.log(varTwo())
console.log(varTwo())