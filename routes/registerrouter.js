const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const User = require('../models/User')
// const siteUser = require('../models/User')


router.post('/', async(req, res)=>{
    const newUser = new User(req.body);
    // await newUser.save();

    await newUser.save();
    res.status(200).json({
        message: 'Form data received!'

    })
    //send an ok message - giving back an object - this is the response message 

        // if (err){
        //     console.log(error)
        // } else{
        //    return res.status(200).json({
        //        message: 'Form data received!'
        //    })
        // }
    })
// if there are errors during the save, then console.log "error", but if they weren't, then render the registered page. 

// if (await siteUser.validateSignup(name, email)){
//     res.render('platform', {err: 'A user with that username already exists - please choose another!'});
//     return; 
// }



module.exports = router;