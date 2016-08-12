const http = require('http');
const fs = require('fs');
const portNum = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath)
  readStream.on('open', () => {
    readStream.pipe(res);
  });
})
server.listen(portNum);


//answer

// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
