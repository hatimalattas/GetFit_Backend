const mongoose = require('mongoose')


const workoutSchema = new mongoose.Schema({
    name: {type: String, required : true},
    description: String,
    picture: String
}) 

const Workout = mongoose.model('Workout' , workoutSchema)

module.exports = Workout