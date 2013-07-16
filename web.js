var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var output = fs.readFileSync('index.html','utf8');
  response.send(output);
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
