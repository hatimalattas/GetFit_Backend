const express = require('express')
const router = express.Router()
const Diet = require('../model/Diet')


//show all
router.get('/all' , (req, res) => {

    Diet.find()
    .then(die => res.json({die}))
    .catch(err => res.json(err))
    
})



//show one
router.get('/:id' , (req, res) => {

    Diet.findById(req.params.id)
    .then(die => res.json({die}))
    .catch(err => res.json(err))
    
})



//create one 
router.post('/' , (req , res) => {

     Diet.create(req.body)
     .then(die => res.json({msg : "Diet created"}))
     .catch(err => res.json(err))

    
})

//insert json seed
router.post('/all' , (req , res) => {

    Diet.insertMany(req.body)
    .then(work => res.json({msg : "many insert created"}))
    .catch(err => res.json(err))
})


//update
router.put('/:id' , (req , res)=> {

    Diet.findByIdAndUpdate(req.params.id , req.body)
    .then(die => res.json({msg : "Diet has been updated"}))
    .catch(err => res.json(err)) 
})



//delete
router.delete('/:id' , (req , res)=> {

    Diet.findByIdAndDelete(req.params.id)
    .then(die => res.json({msg : "Diet has been deleted"}))
    .catch(err => res.json(err))
})



module.exports = router