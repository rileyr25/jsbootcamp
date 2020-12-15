let temp = 190

// logical And operator - True if both sides are true. False otherwise (&&)

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}

// logical Or operator - True if at least one side is true. False otherwise (||)

if (temp <= 0 || temp >=120) {
    console.log('Do not go outside')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Provide vegan options only')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Provide some vegan alternatives')
} else {
    console.log('Provide regular menu')
}
