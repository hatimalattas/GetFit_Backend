const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {type: String, required : true},
    description: String,
    protein: Number,
    carbohydrates: Number,
    fat: Number,
    calories: Number,
    serving_size: String,
    price: Number,
    picture: String

}) 

const Product = mongoose.model('Product' , productSchema)

module.exports = Product
