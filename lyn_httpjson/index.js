let htp = require('http');  
let url = require('url');
function getdata(dateobj){
   return {hour : dateobj.getHours(),minute : dateobj.getMinutes(),second : dateobj.getSeconds()}
}
let server = htp.createServer( (reqst,respon) => {  
   //console.log(reqst.url);
   let relink = url.parse(reqst.url, true);
   //console.log(relink);
   let patname = relink.pathname;
   let linkdate = relink.query.iso
   //console.log(linkdate);
   let dateobj = new Date(linkdate);
   let alldata;
   if(patname == '/api/parsetime'){
      alldata = getdata(dateobj);
   }
   if(patname == '/api/unixtime'){
      alldata = { 
         unixtime :dateobj.getTime()
      }
   }
   if(alldata){
      //console.log(alldata);
      respon.writeHead(200, { 'Content-Type': 'application/json' });
      respon.end(JSON.stringify(alldata));
   }
   
   
})  
server.listen(process.argv[2]);  