// Global Scope (convertFerebheitToCelcius, tempCelcius1, tempCelcius2)
    // Local Scope (temp - function argument, celcius)
        // Local Scope (isFreezing )

let convertFerenheitToCelcius = function (temp) {
    let celcius = (temp - 32) * 5 / 9
    return celcius
    
    if (celcius <= 0) {
        let isFreezing = true
    }
}

let tempCelcius1 = convertFerenheitToCelcius(32)
let tempCelcius2 = convertFerenheitToCelcius(100)

console.log(tempCelcius1)
console.log(tempCelcius2)