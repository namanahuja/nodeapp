require('marko/node-require').install()

var express = require('express')
var app = express();
var base = require('./src/base');

base.setup(app);

app.listen(8000, function(){
	console.log('Server started at port 8000')
})