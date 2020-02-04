const express = require('express')
const router = express.Router()
const User = require('../model/user')

router.get('/all' , (req, res) =>{

    User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err))
    
})

router.post('/regstir' , (req , res) =>{


   User.create(req.body)
   .then(user => {
       res.json({msg :"user regstrid" , user : user})
   })
   .catch(err => res.send(err))

}) 



module.exports = router