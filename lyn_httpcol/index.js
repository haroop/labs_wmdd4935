let htp = require("http");
let link = process.argv[2];
let string = '';
htp.get(link,function(respon){
    respon.setEncoding('utf8');
    respon.on('data',function(data){
        string += data;
        //console.log(string)
    });
    respon.on('error',function(err){
        console.log(err);
    });
    respon.on('end',function(){
        console.log(string.length);
        console.log(string);
    });
})