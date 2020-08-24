const fs = require('fs');

const chalk = require('chalk');

//to get notes
const getNotes = () => {
    return 'Your Notes...';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => {
        return title === note.title;
    });
    if (filteredNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Title already taken.'));
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredOutNotes = notes.filter((note) => {
        return title !== note.title;
    });
    if (notes.length > filteredOutNotes.length) {
        saveNotes(filteredOutNotes);
        console.log(chalk.green.inverse('Note with title '+title+' removed'));
    } else {
        console.log(chalk.red.inverse('No note found with title '+title+' to remove'));
    }
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

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.red.inverse('No notes found'));
    } else {
        console.log(chalk.green.inverse('Your notes'));
        notes.forEach(note => {
            console.log(note.title);
        });
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
};