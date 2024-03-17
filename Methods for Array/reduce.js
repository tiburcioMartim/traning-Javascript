//reduce
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newList = list.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr
})

console.log(newList);