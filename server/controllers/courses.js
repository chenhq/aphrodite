var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res) {
    Course.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getCourseByID = function(req, res) {
    Course.findOne({_id: req.params.id}).exec(function(err, course) {
        console.log("xxxx");
        res.send(course);
    })
};