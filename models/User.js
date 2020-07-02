const mongoose = require ('mongoose');
const { Schema, model } = require('mongoose'); 
const encrypt = require('mongoose-encryption')
const crypto = require('crypto');

const userSchema = new Schema({

    firstName:{type:'String', required:true, trim: true,},

    surname:{type:'String',required:true, trim: true,},

    username: {type:'String', required:true, unique: true },

    email:{type:'String', lowercase: true,  required:'true', unique:'true',trim: true,},

    password:{type:'String',required: true, minlength:[8, 'Password is too short!'], trim:true,},

    phoneNumber:{type: Number, required: [true, 'Please provide your contact number'],trim: true,},

    location: {type: 'String',required: true},  //will be a drop-down

    typeOfUser:{type: 'String',required: true}, //drop-down or checkbox?

})

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields:['password']})
// mongoose-encryption plug in

siteUser.statics.validateSignup = async function(email, username) {
    let existingEmail = await this.findOne({ email });
    let existingUserName = await this.findOne({ username });
    //object || null

    if(existingEmail || existingUserName) {
        console.log("found user");
        return true;
    }

    console.log("could not find user");
    return false;
};

//statics are methods applied directly to the model

module.exports = model('user', userSchema)

//schema is an object created from the mongoose schema class