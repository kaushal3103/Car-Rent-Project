const CustomAPIerror = require('./custom-api');
const BadrequestError = require('./bad-request');
const UnauthorizedError = require('./unauthorized');
const NotfoundError = require('./not-found');


module.exports = {
    CustomAPIerror,
    BadrequestError,
    UnauthorizedError,
    NotfoundError
}