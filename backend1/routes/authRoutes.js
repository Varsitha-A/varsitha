const express = require('express');//importing express module
const router = express.Router(); //creating a router object using express
const {register,login} = require('../controllers/authControllers');//importing register and login functions from authControllers
router.post('/register', register);//only register route is enabled
router.post('/login', login);//only login route is enabled
module.exports = router;