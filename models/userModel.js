const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
        
    },
    password: {
        type: String,
        required: true
        
    },
    salt: String
});
userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(this.password, salt, (err, hash)=>{
            this.password = hash;
            this.salt = salt;
            next();
        });
    });
});
const User = mongoose.model('Poi', userSchema);
module.exports = User;