

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();

var port = 1337;

app.listen(port || 1337);

module.exports = app;
console.log("Running on " + port);

