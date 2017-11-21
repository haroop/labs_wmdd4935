let read = require('fs');
let path = require('path');
module.exports = function(folder,extention,callback){
    read.readdir(folder,function(err, data) {
      if (err) 
        return callback(err);
      else{    
          let allfile = [];
          for (let i = 0 ; i < data.length; i++ ) {
            //console.log(data[i]);
            //console.log(path.extname(data[i]);
            if(path.extname(data[i]) == '.'+extention){
              allfile.push(data[i])
              console.log(data[i])
            }
          }
          return callback(null, allfile)   
      }
    })
}    