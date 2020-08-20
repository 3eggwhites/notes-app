const fs = require('fs');
fs.writeFileSync('notes.txt', 'Hello Notes App!');
fs.appendFileSync('notes.txt', 'File created by node.js');