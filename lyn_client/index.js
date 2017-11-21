let htp = require("http");
let link = process.argv[2];
htp.get(link,function(respon){
    respon.setEncoding('utf8');
    respon.on('data',function(data){
        console.log(data);
    });
    respon.on('error',function(err){
        console.log(err);
    });
})