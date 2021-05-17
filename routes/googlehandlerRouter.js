const express = require('express')
const googleRouter = express.Router()
const passport=require('passport')

googleRouter.route('/')
.get(passport.authenticate('google'))
module.exports=googleRouter