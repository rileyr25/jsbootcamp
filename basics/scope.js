// lexical scope (static scope)
// global scope - defind outside of all code blocks
//local scope - defined inside a code block

// In a scope you can access variables defined in that scope, or any parent/ancestor scope

// GLobal Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
    let varFour ='varFour'    
    }
}

if (true) {
    let varThree = 'varThree'
}

