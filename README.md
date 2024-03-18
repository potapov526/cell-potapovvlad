# cell-potapovvlad

cell-potapovvlad is a Node.js module providing a collection of utilities that are as powerful as supernovas.

## Installation

You can install this module using npm: `npm install cell-potapovvlad`

## Usage

```javascript
const superNovaUtils = require('supernova-utils');

// Get a random Chuck Norris joke
superNovaUtils.getRandomChuckNorrisJoke()
    .then(joke => console.log(joke))
    .catch(err => console.error(err));

// Calculate factorial
console.log(superNovaUtils.factorial(5)); // Output: 120

// Read file contents
const fileContents = superNovaUtils.readFileContents('path/to/file.txt');
console.log(fileContents);

// Format date
const formattedDate = superNovaUtils.formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate);

// Capitalize words
console.log(superNovaUtils.capitalizeWords('hello world')); // Output: Hello World
```



