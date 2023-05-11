const Car = require('../models/car');
const {NotfoundError} = require('../errors');

const createcar = async(req,res)=>{
 
  const car = await Car.create({...req.body});
 
  return res.status(200).json(car);
}


const getallcar = async(req,res)=>{
    const car = await Car.find();
    return res.status(200).json(car);
}


const getonecar = async(req,res)=>{
  const {params:{id}} = req;
  const car = await Car.findById(id);
  
  if(!car){
     throw new NotfoundError(`No car with id ${id}`);
  }

  res.status(200).json(car);
}

const getcarupdate = async(req,res)=>{
  const {params:{id}} = req;
 const car = await Car.findByIdAndUpdate({_id:id},req.body);
  res.status(200).json({car});
}
module.exports = {createcar,getallcar,getonecar,getcarupdate};