var http = require('http');
var sto = require('../index');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The server is : " + sto('status'));
    res.end();
}).listen(8080);
