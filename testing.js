var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

function handleRequest1(request, response) {
	response.end("You are beautiful!");
}

function handleRequest2(request, response) {
	response.end("You are lazy!");
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {
	console.log("Server listening on: http://localhost:" + PORT1);
});

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:" + PORT2);
})