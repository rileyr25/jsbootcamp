let name = 'Riley Robertson'

// length property

console.log(name.length);

// uppercase / lowercase property

console.log(name.toUpperCase());
console.log(name.toLowerCase())

// includes method

let login = 'PasswordRileyRobertson'
console.log(login.includes('Password'))

// trim property

let username = '            this trims the whitespace on the outside of the text   '
console.log(username.trim());

// challenge area

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')){
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('randomcode289304'))