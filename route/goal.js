const express = require('express')
const router = express.Router()
const Goal = require('../model/Goal')


//show all
router.get('/all' , (req, res) => {

    Goal.find()
    .then(goa => res.json({goa}))
    .catch(err => res.json(err))
    
})



//show one
router.get('/:id' , (req, res) => {

    Goal.findById(req.params.id)
    .then(goa => res.json({goa}))
    .catch(err => res.json(err))
    
})



//create one 
router.post('/' , (req , res) => {

     Goal.create(req.body)
     .then(goa => res.json({msg : "Goal created"}))
     .catch(err => res.json(err))

    
})

//insert json seed
router.post('/all' , (req , res) => {

    Goal.insertMany(req.body)
    .then(work => res.json({msg : "many insert created"}))
    .catch(err => res.json(err))
})


//update
router.put('/:id' , (req , res)=> {

    Goal.findByIdAndUpdate(req.params.id , req.body)
    .then(goa => res.json({msg : "Goal has been updated"}))
    .catch(err => res.json(err)) 
})



//delete
router.delete('/:id' , (req , res)=> {

    Goal.findByIdAndDelete(req.params.id)
    .then(goa => res.json({msg : "Goal has been deleted"}))
    .catch(err => res.json(err))
})


module.exports = router