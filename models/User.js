// const mongoose = require ('mongoose');
const { Schema, model } = require('mongoose'); 
const bcrypt = require('bcrypt');


const userSchema = new Schema({

    firstname:{
        type: String, 
        required:true,
        trim: true,
    },

    surname:{
        type: String,
        required:true, 
        trim: true,
    },

    email:{
        type: String,
        lowercase: true,
        required:true,
        unique:true,
        trim: true,
    },

    password:{
        type: String,
        required: true,
        minlength:[8, 'Password is too short!'],
        trim: true,
    },

    passwordcheck:{
        type: String,
        // required: true, 
        minlength:[8, 'Password is too short!'],
        trim: true, 
    },//can remove minlength and trim for bcrypt

    location: {
        type: String,
        required: true
    },  //will be a drop-down

    userstatus:{
        type: String, 
        required: true,
        // enum: ['user', 'admin'] enum so they can only choose from these two
    }, //will be a a drop-down

    // messages:[{type: Schema.Types.ObjectId, ref: 'Message'}]
    //references the Message model - an array of the object id of the message

})


// userSchema.statics.validateSignup = async function(email) {
//     let existingEmail = await this.findOne({ email });

//  if(existingEmail) {
//         console.log("found user");
//         return true;
//     }

//     console.log("could not find user");
//     return false;
// };



userSchema.pre('save', function(next){
    if(!this.isModified('password')) //checking if the user has entered a password - if they haven't, move on
        return next(); 
     bcrypt.hash(this.password, 10,(err, passwordHash)=>{ //if they have, hash with 10 salt rounds.
        if(err)
            return next(err)
        this.password = passwordHash;
        next(); 
    });
  
})


//For registering
//pre-hook -  this runs BEFORE the user information is saved in the db it has to be hashed(otherwise you would have a string in the db). The next is like middleware, saying it can go on to the next stage
//the first arg is the password to hash, the second is the salt length to generate (this)



userSchema.methods.isValidPassword = function(password, cback){
         bcrypt.compare(password, this.password,(err, itMatches)=>{
            if(err)
                return cback(err);
            else{
                if(!itMatches)
                    return cback(null, isMatches);
                return cback(null, this);
                
            }
        }); 
        
    }
    

//For logging in we need a method
//so this is checking if the  password sent by the user matches the hashed one in the db




//statics are methods applied directly to the model

module.exports = model('user', userSchema);

//schema is an object created from the mongoose schema class