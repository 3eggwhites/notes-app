const validator = require('validator');
const addFunction = require('./utils.js');
const getNotes = require('./notes');

const sum = addFunction(4,-2);
console.log(sum);

console.log(getNotes());

console.log(validator.isEmail('abcdefault.com'));