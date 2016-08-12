const http = require('http');
const map = require('through2-map');

const portNum = process.argv[2];

const server = http.createServer((req, res) => {
  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
})
server.listen(portNum);

//accepted answer

// var http = require('http')
// var map = require('through2-map')
//
// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')
//
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
