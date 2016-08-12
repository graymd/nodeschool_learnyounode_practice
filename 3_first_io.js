const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const str = file.toString();
const array = str.split('\n');
console.log(array.length - 1);
