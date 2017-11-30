let Hapi = require('hapi');
let H2o2 = require('h2o2');
let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(process.argv[2] || 8080)
});
server.register(H2o2, (err) => {
   if (err)
      return console.log(err);
   server.route({
      method: 'GET',
      path: '/proxy',
      handler: {
         proxy: {
            //console.log('123');
            //console.log(err);
            host: '127.0.0.1',
            port: 65535
         }
      }
   });
});
server.start(function() {
   console.log('Server running at:', server.info.uri);
});