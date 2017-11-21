let htp = require('http');
let server = htp.createServer(function (reqst,resp) {  
   if(reqst.method == 'POST'){
      let redata = '';
      reqst.on('data',function(data){
            //console.log(data.toString());
         redata += data.toString().toUpperCase();
      });
      reqst.on('end',function(){
         //console.log(redata);
         resp.end(redata);
         
      });
      
   }
   
})  
server.listen(process.argv[2]);  