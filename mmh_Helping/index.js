let Hapi = require('hapi');
let Vision = require('vision');
let Handlebars = require('handlebars');
let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(process.argv[2] || 8080)
});
server.register(Vision, (err) => {
   if (err)
      return console.log(err);
   server.views({
      engines: {
         html: Handlebars
      },
      relativeTo: __dirname,
      path: 'templates',
      helpersPath: 'helper'
   });
   server.route({
      method: 'GET',
      path: '/',
      handler: function(reqst, resp) {
         resp.view('index', {
            name: reqst.query.name,
            suffix: reqst.query.suffix
         });

      }
   });
});

server.start(function() {
   console.log('Server running at:', server.info.uri);
});