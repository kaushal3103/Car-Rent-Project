const CustomAPIerror = require("./custom-api");
const {StatusCodes} = require('http-status-codes')
class UnauthorizedError extends CustomAPIerror{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthorizedError ;