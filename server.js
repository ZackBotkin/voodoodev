

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
var _passport = require('./config/passport');
var express = require('./config/express');


var db = mongoose();
var passport = _passport();
var app = express();


app.listen(config.port || 1337);

module.exports = app;
console.log("Running on " + config.port);

