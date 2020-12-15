let myBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

let person = {
    name: 'Riley', 
    age: 20,
    location: 'Vancouver'
}

console.log(`${person.name} is ${person.age} years old, and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} years old, and lives in ${person.location}`)
