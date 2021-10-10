const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log('connection succesful');
}).catch((e)=>{
    console.log('no connection made');
});

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

app.listen(3000, ()=>{
    console.log(`server is running at port 3000`);
})