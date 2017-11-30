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
      method: 'POST',
      path: '/login',
      handler: function(reqst, resp) {
         //console.log('login successful')
         //console.log(resp)
         resp("login successful");
      },
      config: {
         validate: {
            //console.log('hi1')
            payload: Joi.object({
                  //console.log('hi2')
                  isGuest: Joi.boolean(),
                  username: Joi.string().when('isGuest', {
                     is: false,
                     then: Joi.required()
                  }),
                  password: Joi.string().alphanum(),
                  accessToken: Joi.string().alphanum()
               })
               .options({
                  allowUnknown: true
               })
               .with('username', 'isGuest')
               .without('password', 'accessToken')
         }
      }
   });
});
server.start(function() {
   console.log('Server running at:', server.info.uri);
});