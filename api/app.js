require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const formrouter = require('./routes/form');
const carrouter = require('./routes/car');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/user',formrouter);
app.use('/api/v1/car',carrouter);


const start = async()=>{
    try{ 
       await connectDB(process.env.MONGO_URI);
       app.listen(port,console.log(`Server is listening on ${port}...`));
    }catch(error){
       console.log(error);
    }
}

start();