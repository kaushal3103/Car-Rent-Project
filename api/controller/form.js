const User = require('../models/user');

const createform = async(req,res)=>{
     
    req.body.carRented=req.params.id
    const user = await User.create({...req.body});

    return res.status(200).json(user);

}

module.exports = {createform};