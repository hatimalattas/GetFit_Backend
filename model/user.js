const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name : String ,
    email : {type : String , required :true} ,
    password : {type : String , required :true}, 
    height: String,
    weight: String,
    gender: String,
    birthdate: String,
}) 

const User = mongoose.model('user' , userSchema)

module.exports = User
