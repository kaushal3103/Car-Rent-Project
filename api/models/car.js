const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
//Car name/modal, description, vehicle number,
//maximum seating capacity, color, rent/day, Current booking etc.

const Carschema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,'Please provide car name']
   },
   img:{
   type:String,
   required:[true,'Please provide image']
   }
   , 
   model:{
    type:String,
    required:[true,'Please provide car model']
   }
   ,
   description:{
    type:String,
    required:[true,'Please provide car description']
   }
   ,
   vechileNumber:{
    type:String,
    required:[true,'Please provide car number']
   }
   ,
   capacity:{
    type:String,
    required:[true,'Please provide max capacity']
   },
   color:{
    type:String,
    required:[true,'Please provide color']
   }
   ,
   rentcost:{
     type:String, 
     required:[true,'Please provide rent cost']
   }
   ,
   currentbooking:{
    type:String,
    required:[true,'Please provide booking status']
   }
})

module.exports = mongoose.model('Car',Carschema);