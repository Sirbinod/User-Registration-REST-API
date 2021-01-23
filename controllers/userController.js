const mongoose = require('mongoose');
const User = require('../models/userModel');

module.exports.register = async(req, res, next) =>{
    try{
        const user = new User(req.body);
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.password = req.body.password;
        const createUser = await user.save();
        res.status(200).send(createUser);
        console.log('createUser');
    }catch(err){res.status(500).send(err);}    
}