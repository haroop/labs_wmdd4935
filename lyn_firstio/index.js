let read = require("fs");
let data = read.readFileSync(process.argv[2]);
let string = data.toString();
//console.log(string)
let split = string.split('\n');
//console.log(split)
let leng = split.length-1;
//console.log(leng)
console.log(leng);