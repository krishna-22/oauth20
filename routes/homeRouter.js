const express = require('express')
const homeRouter = express.Router()

homeRouter.route('/')
.get((req,res)=>{res.send('welcome to home page!!')})

module.exports=homeRouter