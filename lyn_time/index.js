let net = require('net');  
let date = new Date();
let mon = date.getMonth()+1;
let today = date.getDate();
if(today < 10)
	today = '0'+date.getDate();
else
	today = date.getDate();
//console.log(today);
let hr = date.getHours();
if(hr < 10)
	hr = '0'+date.getHours()
else
	hr = date.getHours();
//console.log(hr)
let mins = date.getMinutes();
if(mins < 10)
	mins = '0'+date.getMinutes()
else
	mins = date.getMinutes();
//console.log(mins)
let todaydate = date.getFullYear() + "-" + mon  + "-" + today + " " + hr + ":" + mins ;
let server = net.createServer(function (socket) {  
    socket.write(todaydate);
    socket.end("\n");
})  
server.listen(process.argv[2])  