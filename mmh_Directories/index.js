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
      path: '/foo/bar/baz/{name}',
      handler: {
         directory: {
            //console.log('hi');
            path: 'public'
         }
      }
   })
})
server.start(function() {
   console.log('Server running at:', server.info.uri);
});