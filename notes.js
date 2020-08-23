const fs = require('fs');

//to get notes
const getNotes = () => {
    return 'Your Notes...';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = filterNotesOnTitle(notes,title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.log('Title already taken.')
    }
}

const filterNotesOnTitle = (notes, title) => {
    const filteredNotes = notes.filter((note) => {
        return title === note.title;
    });
    return filteredNotes;
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json'); // data store for all the notes
        const notesStringData = dataBuffer.toString();
        return JSON.parse(notesStringData);
    } catch (err) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
};