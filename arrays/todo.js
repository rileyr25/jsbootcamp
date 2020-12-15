const todos = [{
    text: 'Go to the gym',
    completed: true,
}, {
    text: 'Apply to school',
    completed: false,
}, {
    text: 'Go christmas shopping',
    completed: true,
}, {
    text: 'Make portfolio site',
    completed: true,
}, {
    text: 'Play basketball',    
    completed: false,
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
if (index > -1) {
    todos.splice(index, 1)
}}


const todoFilter = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}


const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < true) {
            return -1
        } else if (b.completed > true) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)

console.log(todos)