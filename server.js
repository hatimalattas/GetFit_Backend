const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect('mongodb://localhost/project4', {useNewUrlParser : true , useUnifiedTopology: true } )
.then(() => {
    console.log('connect to mongo');
})

// to use json
app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use(cors())
app.use('/user' , require('./route/user'))







app.listen(5000, () => {
    console.log("server is connected on port 5000");
})