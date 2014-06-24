var auth = require('./auth');
var mongoose = require('mongoose');
var users = require('../controllers/users');
var courses = require('../controllers/courses');
//var User = mongoose.model('User');


module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/courses', courses.getCourses);
    app.get('/api/courses/:id', courses.getCourseByID);

    app.get('/partials/*', function (req, res) {
        // console.log(req.param(0));
        res.render('../../public/app/' + req.param(0))
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('*', function (req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        })
    });
};