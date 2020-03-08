const express = require('express');
const mongoose = require('mongoose');
const app = express()

//Database
mongoose.connect('mongodb://127.0.0.1:27017/parksdb', {useNewUrlParser: true })
.then(() => console.log("Connected to database")) 
.catch(err => console.log(err))

//Middleware

//Controllers
 
//Routes

//Start Serverd