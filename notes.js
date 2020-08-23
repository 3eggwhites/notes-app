const fs = require('fs');

//to get notes
const getNotes = () => {
    return 'Your Notes...';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    notes.push({
        title: title,
        body: body
    });
    console.log('New note added');
}

const filterNotesOnTitle = (notes, title) => {
    notes.filter((note) => {
        return title === note.title;
    });
    return filteredNotes;
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

module.exports = getNotes;