const { Router } = require('express'); //like in react, need to get this bit from express
const User = require('../models/User');
const router = Router();



router.post('/login', async(req, res)=>{
    let { username, password, email } = req.body
    // const username = req.body.username
    // const password = req.body.password

    User.findOne({ username: username }, function(err, foundUser){
        if (err){
            console.log(err);
        } else (foundUser)
        
    })
    
  

})