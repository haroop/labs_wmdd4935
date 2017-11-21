let htp = require('http');  
let read = require('fs');
let server = htp.createServer(function (reqst,respon) { 
   let fsread = read.createReadStream(process.argv[3]);
   //console.log(fsread);
   fsread.on('open', function () {
   	//console.log(respon);
        fsread.pipe(respon);
   });
   
})  
server.listen(process.argv[2]);  