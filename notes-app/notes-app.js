const notes = [
    {
        title: 'Cyberpunk 2077 Builds',
        body: 'This is a sample body text for your note taking app'
    },     {
        title: 'NBA Fantasy Draft List',
        body: 'Giannis'
    },    {
        title: 'How to waste as much shatter as humanly possible',
        body: 'This is a sample body text for your note taking app'
    },    {
        title: 'App Ideas',
        body: 'This is a sample body text for your note taking app'
    },    {
        title: 'Ayo',
        body: 'This is a sample body text for your note taking app'
    },    {
        title: 'Lil Baby ft. Da Baby',
        body: 'This is a sample body text for your note taking app'
    },
]

const filters = {
    searchNotes: ''
}

let renderNotes = function (notes, filters) {
    let filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchNotes.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        let noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#search-notes').addEventListener('input', function (e) {
    filters.searchNotes = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#create-note').addEventListener('click', function () {
    notes.push({
        title: 'this is a new note you created bruh',
        body: 'this is the body of the new note youve created bro'
    })
    renderNotes(notes, filters)
})