const yargs = require('yargs');
const notes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: { // to specify additional options for this command
        title: {
            describe: 'Title for a note',
            demandOption: true, // to mark an option as required
            type: 'string' //for specifying type of a option
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title,argv.body);
    }
}).command({ //create remove command
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNotes(argv.title);
    }
}).command({ //create list command
    command: 'list',
    describe: 'List all the notes',
    handler: () => {
        notes.listNotes();
    }
}).command({ //create read command
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: {
            decsribe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNotes(argv.title);
    }
}).argv