const todos = [{
    title: 'Take out the trash',
    completed: true,
}, {
    title: 'Go to the gym',
    completed: false,
}, {
    title: 'Make fantasy draft list',
    completed: false,
}, {
    title: 'Read a book',
    completed: false,
}, {
    title: 'Go to the range',
    completed: true,
}, {
    title: 'Finish Cyberpunk 2077',
    completed: false,
}, {
    title: 'Make a playlist',
    completed: true,
}]

const filters = {
    searchTitle: '',    
    hideCompleted: false,
}



const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })

    const incomplete = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incomplete.length} tasks left`
    
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.title
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-title').addEventListener('input', function (e) {
    filters.searchTitle = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#filter-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
}) 


