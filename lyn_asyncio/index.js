let read = require('fs');
read.readFile(process.argv[2], checkfile);

function checkfile(err, data) {
  if (err) 
  	return console.log(err);
  let string = data.toString();
  //console.log(toStrng);
  let split = string.split('\n');
  //console.log(split);
  let len = split.length-1;
  console.log(len);
}