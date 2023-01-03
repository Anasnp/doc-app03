const express=require("express");
const colors= require('colors');
const morgan = require('morgan');
const dotenv=require('dotenv');
const connectDB= require( "./config/db");


require('dotenv').config();

connectDB();
const app=express()

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.status(200).send({
        message:"server running ",
    })
})

const port =process.env.PORT ||8080
app.listen(port,(err)=>{
    console.log('server started on port: '+port);
})