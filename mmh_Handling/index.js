let Hapi = require('hapi');
let Inert = require('inert');
let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(process.argv[2] || 8080)
});
server.register(Inert, function(err) {
   if (err)
      return console.log(err);
   server.route({
      method: 'GET',
      path: '/',
      handler: function(reqst, resp) {
         //console.log(resp);
         resp.file('index.html');
      }
   });
});

server.start(function() {
   console.log('Server running at:', server.info.uri);
});