let num = 234.2341

console.log(num.toFixed(13));

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num));


let min = 10
let max = 50
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// challenge area 


// let guess = function(number) {
//     let min = 1
//     let max = 5
//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

//     return randomNum === number
// }

// console.log(guess(3))

let guess = function(number) {
    let min = 1
    let max = 5

    let generated = Math.floor(Math.random() * (max - min + 1)) + min
    
    
    return generated === number
}

console.log(guess(1))
console.log(guess(2))
console.log(guess(3))
console.log(guess(4))
console.log(guess(5))
