const express = require('express')
const router = express.Router()
const Workout = require('../model/Workout')
const axios = require('axios')

//show all
router.get('/all' , (req, res) => {


    Workout.find()
    .then(work => res.json({work}))
    .catch(err => res.json(err))
    
})



//show one
router.get('/:id' , (req, res) => {

    Workout.findById(req.params.id)
    .then(work => res.json({work}))
    .catch(err => res.json(err))
    
})


//create one 
router.post('/' , (req , res) => {



     Workout.create(req.body)
     .then(work => res.json({msg : "Workout created"}))
     .catch(err => res.json(err))

    
})


//insert json seed
router.post('/all' , (req , res) => {

    Workout.insertMany(req.body)
    .then(work => res.json({msg : "many insert created"}))
    .catch(err => res.json(err))
})


//update
router.put('/:id' , (req , res)=> {

    Workout.findByIdAndUpdate(req.params.id , req.body)
    .then(work => res.json({msg : "Workout has been updated"}))
    .catch(err => res.json(err)) 
})



//delete
router.delete('/:id' , (req , res)=> {

    Workout.findByIdAndDelete(req.params.id)
    .then(work => res.json({msg : "Workout has been deleted"}))
    .catch(err => res.json(err))
})


module.exports = router