const dotenv = require('dotenv');
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT = process.env.PORT;

//middleware
const middleware = (req,res,next)=>{
    console.log('hello my middleware');
    next();
}

app.get('/',(req,res)=>{
    res.send(`hello world`);
})
app.get('/about',middleware,(req,res)=>{
    res.send(`about me`);
})
app.get('/contact',(req,res)=>{
    res.send(`contact me`);
})
app.get('/login',(req,res)=>{
    res.send(`login page`);
})
app.get('/register',(req,res)=>{
    res.send(`register page`);
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})