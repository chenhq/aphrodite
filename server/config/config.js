var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/aphrodite',
        port: process.env.PORT || 3030

    },

    production: {
        rootPath: rootPath,
        db: 'mongodb://user:password@localhost:123/aphrodite',
        port: process.env.PORT || 80

    }
};