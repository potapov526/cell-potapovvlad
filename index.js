const axios = require('axios');
const fs = require('fs');
const moment = require('moment');

// Function to fetch a random Chuck Norris joke
async function getRandomChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        throw new Error('Failed to fetch Chuck Norris joke');
    }
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Function to read a file and return its contents
function readFileContents(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        throw new Error('Failed to read file');
    }
}

// Function to format a date using moment.js
function formatDate(date, format) {
    return moment(date).format(format);
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

module.exports = {
    getRandomChuckNorrisJoke,
    factorial,
    readFileContents,
    formatDate,
    capitalizeWords
};
