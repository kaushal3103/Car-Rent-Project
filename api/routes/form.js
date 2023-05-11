const express = require('express');
const router = express.Router();

const {createform} = require('../controller/form');

router.post('/book/:id',createform);


module.exports = router ;