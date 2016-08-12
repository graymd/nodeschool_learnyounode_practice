const http = require('http');
const url = require('url');
const portNum = process.argv[2];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const urlObject = url.parse(req.url, true);
  const dateObject = createDateObjectFrom(urlObject);
  console.log(urlObject.pathname);
  let jsonResponse = null;
  if (urlObject.pathname === '/api/parsetime'){
    jsonResponse = JSON.stringify(jsonObject(dateObject));
  } else if (urlObject.pathname === '/api/unixtime') {
    jsonResponse = JSON.stringify(jsonUnixTimeObject(dateObject));
  }
  res.end(jsonResponse);
})
server.listen(portNum);


function getDateFrom(urlObject){
  return urlObject.query.iso;
}

function createDateObjectFrom(urlObject) {
  return new Date(getDateFrom(urlObject));
}

function jsonObject(dateObject){
  return {
    "hour": dateObject.getHours(),
    "minute": dateObject.getMinutes(),
    "second": dateObject.getSeconds()
  }
}


function jsonUnixTimeObject(dateObject) {
  return {
    unixtime: dateObject.getTime()
  }
}

//accepted answer
// var http = require('http')
//      var url = require('url')
//
//      function parsetime (time) {
//        return {
//          hour: time.getHours(),
//          minute: time.getMinutes(),
//          second: time.getSeconds()
//        }
//      }
//
//      function unixtime (time) {
//        return { unixtime : time.getTime() }
//      }
//
//      var server = http.createServer(function (req, res) {
//        var parsedUrl = url.parse(req.url, true)
//        var time = new Date(parsedUrl.query.iso)
//        var result
//
//        if (/^\/api\/parsetime/.test(req.url))
//          result = parsetime(time)
//        else if (/^\/api\/unixtime/.test(req.url))
//          result = unixtime(time)
//
//        if (result) {
//          res.writeHead(200, { 'Content-Type': 'application/json' })
//          res.end(JSON.stringify(result))
//        } else {
//          res.writeHead(404)
//          res.end()
//        }
//      })
//      server.listen(Number(process.argv[2]))
//
//
//
//
