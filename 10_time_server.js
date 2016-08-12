const net = require('net');
const portNum = process.argv[2];
const data = dateInfo();

const server = net.createServer((socket) => {

  // socket.write(data, () => {
  //   console.log(data);
  // });
  socket.end(data);
})
server.listen(portNum);


function dateInfo() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth() + 1;     // starts at 0
  const twoDigMonth = month < 10 ? `0${month}` : month
  const day = date.getDate();      // returns the day of month
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (`${fullYear}-${twoDigMonth}-${day} ${hours}:${minutes}\n`);
}


//accepted answer:
// var net = require('net')
//
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))
