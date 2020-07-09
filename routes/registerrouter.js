const express = require('express');
const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const passport = require('passport'); 
const passportConfig =require('../config/passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


router.post('/', async (req, res) => {
    let { firstname, surname, email, password, location, userstatus } = req.body //the body has been parsed to a javascript object so we can interact with them
    // Here we have create the above variables. 


    //check if user already exists

    User.findOne({ email }, async (err, userDoc) => {
        if (err) {
            //console.log(err)
        } if (userDoc) { 
            //console.log('User already exists!')
            res.status(400).json({
                message: 'A user with this email address is already registered!'
            })
        } else {
            //console.log('email available - you may register!')
            const newUser = new User({
                firstname,
                surname,
                email,
                password,
                location,
                userstatus
            })
            await newUser.save()
            res.status(200).json({
                message: 'form received!'
            })
        }

    })


})

//when passing a callback to a query, remember all these callbacks in mongoose have the pattern callback(error, result)
//so here - finding user by the email (kept getting an error when did email: email - ask) if error then error, if the the email exists say this, else save the user 
//send an ok message - giving back an object - this is the response message 



module.exports = router;





// if (await siteUser.validateSignup(name, email)){
//     res.render('platform', {err: 'A user with that username already exists - please choose another!'});
//     return; 
// }

