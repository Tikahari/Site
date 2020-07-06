var http = require('http');
var express = require('express')
var app = express();
//print('h1')
/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use('/', express.static(__dirname + './index.html'));
  

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'Tikahari Khanal\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();
