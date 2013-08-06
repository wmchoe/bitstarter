var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
 
var buf = new Buffer(8);
buf = fs.readFileSync('index.html');
var output = buf.toString('ascii');


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
