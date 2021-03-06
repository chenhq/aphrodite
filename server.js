var express = require('express');

env = process.env.NODE || 'development';

var config  = require('./server/config/config')[env];

var app = express();

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');