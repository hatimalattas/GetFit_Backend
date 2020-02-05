const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

router.get('/all' , (req, res) =>{

    User.find()
    .then(users => res.send(users))
    .catch(err => res.send(err))
    
})



process.env.SECRET_KEY = 'secret'
// register
router.post('/register', (req, res) => {
  
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
             
                    var newUser = req.body
                   
                    User.create(newUser)
                        .then(user => res.json({ msg: "user created", userInf: newUser }))
                        .catch(err => res.send(err))
              
            }
            else {
                res.send(`email used !!! chang the email ` + user)
            }
        }).catch(err => res.send(err))
})
// login
router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                if (req.body.password ==  user.password) {
                    user.password = ""
                    var paylod = { user }
                    let token = jwt.sign(paylod, process.env.SECRET_KEY, { expiresIn: 1440 })
                    res.json({ token :token , log :true})
                }
                //    if password not the same 
                else {
                    res.json({msg :"password is not currect" , log :false})
                }
            }
            else {
                res.json({msg :"email is not found" , log :false})
            }
        }).catch(err => res.send(err))
})



module.exports = router