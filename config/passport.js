const passport = require('passport'); //authentication middleware
const LocalStrategy = require('passport-local').Strategy; //use it to compare against the data we hold in the database
const JwtStrategy = require('passport-jwt').Strategy
const User = require('../models/User'); //our Model 




const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token; 
}

//extracting the JWT token from the request


passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor, 
    secretOrKey: "lucy",  
  }, (payload, done)=>{
    User.findById({_id : payload.sub}, (err, user)=>{
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else
            return done(null, false); 


    }) 
  }));


//this is used for authorization - so certain parts of the app we need to protect  
//when authenticated we set a cookie (the JWT token) on the clients browser
//the cookie Extractor extracts the JWT token
//the secretOrKey checks it's real by verifying the token's signature 
//new JWT strategy takes 2 args. Options, verify.




passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
}, (email, password, done)=>{
    User.findOne({email},(err,user)=>{
        if(err) //something didn't work with db 
            return done(err)        
        if(!user) //if user doesn't exist
            return done(null, false); //no error, but no user exists (so false);
        user.isValidPassword(password, done) //this is the method we set in the schema to compare passwords. 
    })
}))



//above is fired when we sign in
//done gets called when it is finished