
var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

module.exports = function() {

    var app = express();

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSecretCookieSecret'
    }));

    app.use(flash());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    return app;
};

