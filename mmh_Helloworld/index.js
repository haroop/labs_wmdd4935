let Hapi = require('hapi');
let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(process.argv[2] || 8080)
});
server.route({
   path: '/',
   method: 'GET',
   handler: function(reqst, resp) {
      //console.log(reqst);
      //console.log(resp);
      resp('Hello hapi');
   }
});

server.start(function() {
   console.log('Server running at:', server.info.uri);
});