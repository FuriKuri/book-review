var Hapi = require('hapi');

var port = 8000;
if (process.env.NODE_PORT) {
  port = process.env.NODE_PORT;
}

var server = new Hapi.Server();
server.connection({ 
  port: port 
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
  	var stars = Math.floor(Math.random() * 6);
  	var review_count = Math.floor((Math.random() * 380) + 20);
  	reply({
  		id: encodeURIComponent(request.params.name),
  		stars: stars,
  		review_count: review_count
  	});
  }
});

server.start();
console.log("Server started on port " + port + "...");