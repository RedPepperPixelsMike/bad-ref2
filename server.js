var express = require('express')
var app = express()
 

var port = process.env.PORT || 3000;

app.listen(port || 3000, function () {
  console.log('Example app listening on port 3000!');
});