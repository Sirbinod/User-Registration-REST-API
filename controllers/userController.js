const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const User = mongoose.model('User');
const register = async(req, res, next) =>{
    try{
        // bcrypt.hash(req.body.password, 10, (err, hassedPass)=>{
        //     if (err){
        //         res.json({
        //             error: err
        //         })
        //     }

        const user = new User (req.body);
        const createUser = await user.save();
        res,status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    }
   
  
}

    
module.exports = {
    register
}