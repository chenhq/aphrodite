var crypto = require('crypto');

exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPwd = function(slat, pwd) {
    var hmac = crypto.createHmac('sha1', slat);
    return hmac.update(pwd).digest('hex');
};