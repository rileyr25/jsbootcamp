let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pages: 769
}

let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}`)
}

getSummary(myBook)
getSummary(otherBook)

// challenge area

let tempConvert = function (tempF) {
    return {
        farenheit: tempF,
        celcius: (tempF - 32) * 5 / 9,
        kelvin: (tempF + 459.67) * 5 / 9
    }
}

let temp = tempConvert(10)


console.log(temp.kelvin)