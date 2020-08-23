const chalk = require('chalk');
const notes = require('./notes.js')

const command = process.argv[2];

if ('add' === command) {
    console.log('Adding note');
} else if ('remove' == command) {
    console.log('Removing note');
}

console.log(process.argv);