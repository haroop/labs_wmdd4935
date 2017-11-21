let htp = require("http");
let links = [process.argv[2],process.argv[3],process.argv[4]];
let stringarray = [];
let runcount = 0;
function result(){
    for(let j=0;j<3;j++){
        console.log(stringarray[j]); 
    }
}
for(let i=0;i<=2;i++){  
        htp.get(links[i],function(respon){
            let str = '';
            respon.setEncoding('utf8');
            respon.on('data',function(data){
               str += data;
            });
            respon.on('error',function(err){
                console.log(err);
            });
            respon.on('end',function(){
            stringarray[i] = str;
            runcount++;
            if(runcount >= 3){
                result();
            }
                
            });
        })
    
}