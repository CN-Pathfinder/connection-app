const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const User = require('../models/User')
const siteUser = require('../models/User')


router.get('/register', async(req, res)=>{
    const newUser = new User(req.body);
    // await newUser.save();

    await newUser.save(function(err){
        if (err){
            console.log(error)
        } else{
            res.render("/registered")
        }
    })
// if there are errors during the save, then console.log "error", but if they weren't, then render the registered page. 

if (await siteUser.validateSignup(name, email)){
    res.render('platform', {err: 'A user with that username already exists - please choose another!'});
    return; 

}

})