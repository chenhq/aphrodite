var mongoose = require('mongoose');
var userModel = require('../models/User');
var courseModel = require('../models/Course');


module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongodb connection error...'));
    db.once('open', function callbackup(){
        console.log('aphrodite db opened')
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();

};