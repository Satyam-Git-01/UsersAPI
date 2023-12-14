const express= require('express');
const { getAllUsers, createUser,getSingleUser } = require('../controllers/userController');

const userRoute= express.Router();
userRoute.get('/',getAllUsers)
userRoute.post('/',createUser)
userRoute.get('/:id',getSingleUser)


module.exports=userRoute