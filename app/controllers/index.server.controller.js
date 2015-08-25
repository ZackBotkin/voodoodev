

exports.render = function(req, res) {

    console.log('inside index controller');
    console.log('user: ' + req.user);

    res.render('index', {
        title: 'Howdy World',
        user: req.user ? req.user.username : ''
    })
};

