const { StatusCodes } = require("http-status-codes");
const CustomAPIerror = require("./custom-api");


class BadrequestError extends CustomAPIerror{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadrequestError;