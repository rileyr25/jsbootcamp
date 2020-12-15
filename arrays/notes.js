const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Jamaica'
}, {
    title: 'This weeks goal',
    body: 'learn javascript arrays'
}, {
    title: 'My Dream Job',
    body: 'NBA player'
}]

const findNote = function (notes, noteSearch) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteSearch.toLowerCase()
    })
}

const search = findNote(notes, 'this weeks goal')
console.log(search)

const 