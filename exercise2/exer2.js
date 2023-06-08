// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// File: main.js

const countries = require('./countries.js');
const webTechs = require('./web_techs.js');

console.log(countries); // Output: ['Albania', 'Bolivia', 'Canada', ...]
console.log(webTechs); // Output: ['HTML', 'CSS', 'JavaScript', ...]
