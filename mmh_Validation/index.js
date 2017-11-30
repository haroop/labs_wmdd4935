let Hapi = require('hapi');
let Inert = require('inert');
let Joi = require("joi")
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
      path: '/chickens/{breed}',
      handler: function(reqst, resp) {
         //console.log(reqst);
         //console.log(resp);
         console.log(reqst.params);
      },
      config: {
         validate: {
            //console.log('123');
            params: {
               breed: Joi.string().required()

            }
         }
      }
   })
})
server.start(function() {
   console.log('Server running at:', server.info.uri);
});