let http = require('http');
let bl = require('bl');

url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    string = data.toString();
    console.log(string.length);
    console.log(string);
  }))
});
