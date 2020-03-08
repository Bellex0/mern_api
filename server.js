const express = require('express');
const mongoose = require('mongoose');
const app = express()

//Database
mongoose.connect('mongodb://127.0.0.1:27017/parkdb', {useNewUrlParser: true })
.then(() => console.log("Connected to database")) 
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//Controllers
 const ParkControl = require('./controllers/ParkControl')

//Routes
app.post('/api/park/create', ParkControl.create)

//Start Server
app.listen(3000, ()=> console.log("Server started on 3000"))