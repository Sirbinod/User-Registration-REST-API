const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');



// const userController = require('../controllers/userController');
router.post('/register', async(req,res) =>{
    try{
        const user = new User ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        const createUser = await user.save();
        res.status(201).send(createUser);
       
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
})

router.post('/login', async(req, res) =>{
    try{
        console.log('inside');
        const email = req.body.email;
        const password = req.body.password;
        console.log(password);
        const userLogin = await User.findOne({email:email});
        console.log(userLogin);
        const isMatch = await bcrypt.compare(password, userLogin.password);
        console.log(isMatch);
        if(isMatch){
            res.status(201).send('Success');
            console.log('sssss');
        }else{
            res.send('invalid password details');
        }
    }catch(err){
        res.status(400).send("invalid login details");
    }
})


module.exports = router;