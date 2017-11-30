let Hapi = require('hapi');
let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(process.argv[2] || 8080)
});
server.route({
   path: '/{name}',
   method: 'GET',
   handler: function(reqst, resp) {
      //console.log(reqst.params);
      //console.log(reqst.params.name);
      resp('Hello ' + reqst.params.name);
   }
});

server.start(function() {
   console.log('Server running at:', server.info.uri);
});