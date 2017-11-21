let mod = require("./lyn_modularfile.js");
let folder = process.argv[2];
let extention = process.argv[3];
mod(folder,extention,function(err,dataList){
    if (err) 
        return console.log(err);
    //console.log(dataList);
});
