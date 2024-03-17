//filter
//return a new list witch news elements
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const listNumEven = list.filter((element) => {
    return element % 2 === 0
})

console.log(listNumEven);