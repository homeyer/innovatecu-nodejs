var http = require('http');
var count = 0;

var onConnection = function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello World\n' + count);

};

var server = http.createServer(onConnection);

server.listen(1337, "127.0.0.1");
