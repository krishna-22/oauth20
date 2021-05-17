const express = require('express')
const loginRouter = express.Router()
const passport=require('passport')
const mongoose = require('../index')
const guser= require('../models/userModel')
loginRouter.route('/')
.get(passport.authenticate('google'),(req,res)=>{
  res.send('you are logged in')
   })
 
  


module.exports=loginRouter