const mongoose = require('mongoose')


const dietSchema = new mongoose.Schema({
    name: {type: String, required : true},
    description: String,
    picture: String
}) 

const Diet = mongoose.model('Diet' , dietSchema)

module.exports = Diet
