const { Router } = require('express'); //like in react, need to get this bit from express
const User = require('../models/User');
const router = Router();

router.get('/', async (req, res)=> {
    
})

router.post('/', async(req, res)=>{
    let { username, password, email } = req.body


    User.findOne({ username: username }, function(err, foundUser){
        if (err){
            console.log(err);
        } else (foundUser)
        
    })
    
  

})

module.exports = router; 