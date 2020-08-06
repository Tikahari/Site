var http = require('http');
var express = require('express')
var app = express();
//print('h1')
/* serve static files - see http://expressjs.com/en/starter/static-files.html */

app.use(express.static(__dirname));

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});
