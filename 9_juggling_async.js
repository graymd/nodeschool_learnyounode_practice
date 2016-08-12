let http = require('http');
let bl = require('bl');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

function print(url) {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      dataGen.next(data.toString());
    }));
  });
};

function* steps() {
  const url1output = yield print(url1);
  console.log(url1output);
  const url2output = yield print(url2);
  console.log(url2output);
  const url3output = yield print(url3);
  console.log(url3output);
}

const dataGen = steps();
dataGen.next();

// answer from learnyounode
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)
