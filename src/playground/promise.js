const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data')
        // reject('sorry reject')
    }, 1500)
})

// const promisa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is promisa')
//         // reject('sorry reject')
//     }, 1500)
// })
console.log('before')

promise.then((data) => {
    console.log(data)
    return data
}).then((data) => {
    console.log('does this run' + data)
}).catch((err) => {
    console.log('error: ' + err)
})

console.log('after')