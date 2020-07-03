// const mongoose = require ('mongoose');
const { Schema, model } = require('mongoose'); 
// const encrypt = require('mongoose-encryption')
const crypto = require('crypto');

const userSchema = new Schema({

    firstname:{type:'String', required:true, trim: true,},

    surname:{type:'String',required:true, trim: true,},

    email:{type:'String', lowercase: true,  required:'true', unique:'true',trim: true,},

    password:{type:'String',required: true, minlength:[8, 'Password is too short!'], trim:true,},
    //can remove minlength and trim for bcrypt

    location: {type: 'String',required: true},  //will be a drop-down

    userstatus: {type: 'String', required: true}, //will be a a drop-down

    salt: {type:'String', required: true}, 

})


userSchema.statics.validateSignup = async function(email, username) {
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