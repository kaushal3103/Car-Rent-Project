const express = require('express');
const router = express.Router();

const {createcar,getallcar,getonecar,getcarupdate} = require('../controller/car');


router.post('/create-car',createcar);
router.get('/dashboard',getallcar);
router.get('/getcar/:id',getonecar);
router.patch('/carupdate/:id',getcarupdate);


module.exports = router;