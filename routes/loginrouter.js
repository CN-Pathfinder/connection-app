const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User');


const signToken = (userID)=>{
    return jwt.sign({
        iss: "lucy", //who issued the token
        sub: userID, //who is the token for (the user)
    }, "lucy",{expiresIn: "1h"}); //this has to match the secretOrKey in passport
}

//sending back information in the payload (by jwt.sign)


router.post('/', passport.authenticate('local',{session: false}), (req, res)=>{
    
    if(req.isAuthenticated()){
        const{_id, email} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly: true, sameSite: true});
        //basically these two properties are for security and to make sure the jwt token is secure
        res.status(200).json({
            isAuthenticated:true, user: {email}
          }); //if the user exists and password is correct 
    }
}); 

router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {email} = req.user;
    res.status(200).json({isAuthenticated : true, user : {email}});
    });

//we defined local in passport.js, so that's where it is coming from
//session is false because we don't want to store teh user details 

module.exports = router;