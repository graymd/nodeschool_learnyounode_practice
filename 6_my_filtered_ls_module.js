fs = require('fs');
path = require('path');


module.exports = function (dirName, extension, callback) {
  let fileExtension = '.' + extension;
  const matchingFiles = [];
  fs.readdir(dirName, (err, data) => {
    if (err) {
      return callback(err);
    }
    data.forEach((el) => {
      if (path.extname(el) == fileExtension){
        matchingFiles.push(el);
      }
    })
// return callback(null, matchingFiles);
  return callback(null, matchingFiles);
  })

}



// module.exports = function (dirName, fileExtension, callback()) {
//
// }
