// //Promise sintax
// new Promise((resolve, reject) => {
//     //...
//     //...
//     resolve()
//     //...
//     reject()
// })

const anyNum = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = parseInt(Math.random() * 100)
    resolve(num)
    }, 2000)
})

console.log('Hello guys!!');

anyNum
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finalizou');
    })