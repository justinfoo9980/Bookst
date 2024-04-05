const config = require('config');

module.exports = function () {
    if (!process.env.APP_KEY) {
        console.error('Please add APP_KEY into your env variable')
        process.exit(1);
    }
}