const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide name'],
        minlength:3,
        maxlength:30,
    },
    number:{
        type:Number,
        required:[true,'Please provide Contact Number'],
        minlength:10,
        maxlength:10
    }
    ,
    issuedate:{
        type:Date,
        required:[true,'Please provide Issue Date']
    }
    ,
    returndate:{
        type:Date,
        required:[true,'Please provide Return Date']
    }
    ,
    carRented:{
        type:String,
        required:[true,'Please provide car rented']
    }
   
})

module.exports = mongoose.model('User',UserSchema);