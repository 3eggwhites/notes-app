const chalk = require('chalk');
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
    handler: () => {
        console.log('Removing a Note');
    }
}).command({ //create list command
    command: 'list',
    describe: 'List all the notes',
    handler: () => {
        console.log('Listing all notes');
    }
}).command({ //create read command
    command: 'read',
    describe: 'Read a Note',
    handler: () => {
        console.log('For reading a Note');
    }
}).argv