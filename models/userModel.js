const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        unique:[true, "email id already present"],
        validator(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type: Number,
        required: true,
        min: 10,
        unique: [true, "phone number already exit"]
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre("save", async function(next){
    if (this.isModified("password")){
        console.log(this.password);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(this.password);

    }
    next();
    
})

const User = mongoose.model('User', userSchema);
module.exports = User;