let read = require('fs');
let path = require('path');

read.readdir(process.argv[2], checkdir);

function checkdir(err, dirData) {
  if (err) 
    return console.error(err);
  for (let i = 0 ; i < dirData.length; i++ ) {
  	//console.log(dirData[i])
  	//console.log(path.extname(dirData[i]))
    if(path.extname(dirData[i]) == '.'+process.argv[3])
      console.log(dirData[i])
  }
  
}