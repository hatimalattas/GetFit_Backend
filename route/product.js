const express = require('express')
const router = express.Router()
const Product = require('../model/Product')


//show all
router.get('/all' , (req, res) => {

    
    Product.find()
    .then(prod => res.json({prod}))
    .catch(err => res.json(err))
    
})



//show one
router.get('/:id' , (req, res) => {

    Product.findById(req.params.id)
    .then(prod => res.json({prod}))
    .catch(err => res.json(err))
    
})



//create one 
router.post('/' , (req , res) => {

     Product.create(req.body)
     .then(prod => res.json({msg : "Product created"}))
     .catch(err => res.json(err))

    
})


//insert json seed
router.post('/all' , (req , res) => {

    Product.insertMany(req.body)
    .then(work => res.json({msg : "many insert created"}))
    .catch(err => res.json(err))
})


//update
router.put('/:id' , (req , res)=> {

    Product.findByIdAndUpdate(req.params.id , req.body)
    .then(prod => res.json({msg : "Product has been updated"}))
    .catch(err => res.json(err)) 
})



//delete
router.delete('/:id' , (req , res)=> {

    Product.findByIdAndDelete(req.params.id)
    .then(prod => res.json({msg : "Product has been deleted"}))
    .catch(err => res.json(err))
})


module.exports = router