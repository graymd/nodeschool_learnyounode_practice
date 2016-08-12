fs = require('fs');
path = require('path');
myModule = require('./6_my_filtered_ls_module.js');

myModule(process.argv[2], process.argv[3], function dataFromModule(err, data) {
  if (err){
    return console.error('There was an error:', err);
  }
  data.forEach((el) => {
    console.log(el);
  })

});
