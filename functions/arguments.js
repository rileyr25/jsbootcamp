// multiple arguments

let add = function (a, b, c) {
    return (a + b) * c
}

let result = add(17, 3, 5)
console.log(result)

// default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} | Score: ${score}` 
}

let result0 = getScoreText('Riley', 1827)
let result1 = getScoreText('Finn', 1827)
let result2 = getScoreText('Daniel', 69)
let result3 = getScoreText()
let result4 = getScoreText('Jarvis')
let result5 = getScoreText(undefined, 1085)

console.log(result0)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

// challenge section

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = tipPercent * total
    return `A ${percent}% tip on $${total} would be $${tip}`
}


let tip = getTip(123, .17)


console.log(tip)


let name = 'Miko'
console.log(`${name}, is my favourite person`)

console.log(`Hello ${name}, welcome back to your profile!`)