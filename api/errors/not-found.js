const {StatusCodes} = require('http-status-codes');
const CustomAPIerror = require('./custom-api');


class NotfoundError extends CustomAPIerror{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotfoundError ;