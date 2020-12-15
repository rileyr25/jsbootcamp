// Function - input, code, output

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
    let result = num * num
    return result
}


let value = square(37)
let otherValue = square(823)
square(18)
square(7)

console.log(value)
console.log(otherValue)


//challenge area

let convertFerenheitToCelcius = function (temp) {
    let celcius = (temp - 32) * 5 / 9
    return celcius
}

let tempCelcius1 = convertFerenheitToCelcius(32)
let tempCelcius2 = convertFerenheitToCelcius(100)

console.log(tempCelcius1)
console.log(tempCelcius2)
