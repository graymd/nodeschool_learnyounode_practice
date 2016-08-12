fs = require('fs');
path = require('path');

fs.readdir(process.argv[2], (err, list) => {
  list.forEach((el) => {
    if (path.extname(el) == '.' + process.argv[3]) {
      console.log(el);
    }
  })
})
