
var User = require('mongoose').model('User');
var passport = require('passport');


var getErrorMessage = function(err) {

    var message = '';
    if (err.code) {
        switch(err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists!';
                break;
            default:
                message = 'Something went wrong!';
        }
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
};


exports.renderLogin = function(req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Log-in form',
            messages: req.flash('error') || req.flash('info')
        });
    }
    else {
        console.log('redirecting home');
        return res.redirect('/');
    }
};

exports.renderRegister = function(req, res, next) {
    if(!req.user) {
        res.render('register', {
            title: 'Register Form',
            messages: req.flash('error')
        });
    }
    else {
        console.log('redirecting home');
        return res.redirect('/');
    }
};

exports.register = function(req, res, next) {
    console.log('in register');
    if (!req.user) {
        var user = new User(req.body);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            console.log('user saved');
            if (err) {
                var message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/register');
            }
            req.login(user, function(err) {
                if (err) {
                    return next(err);
                }
                console.log('redirecting home');
                console.log('user ' + req.user);
                return res.redirect('/');
            });
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

exports.create = function(req, res, next) {

    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.list = function(req, res, next) {

    User.find({}, function(err, users) {
        if (err) {
            next(err);
        }
        else {
            res.json(users);
        }
    });
};

exports.read = function(req, res, next) {
    res.json(req.user);
};

exports.userById = function(req, res, next) {
    
    User.findOne({
            _id: id
        },
        function(err, user) {
            if(err) {
                next(err);
            }
            else {
                req.user = user;
                next();
            }
        }
    );
};

exports.update = function(req, res, next) {

    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if(err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.delete = function(req, res, next) {

    req.user.remove(function(err) {
        if(err) {
            return next(err);
        }
        else {
            res.json(req.user);
        }
    });
};






