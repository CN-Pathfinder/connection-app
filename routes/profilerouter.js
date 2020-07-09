const { Router } = require('express'); //like in react, need to get this bit from express
const router = Router();
const passport = require('passport');
const passportConfig = require('../config/passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.get('/', passport.authenticate('jwt',{ session: false }), (req, res) => {

    const { firstname, surname, location, userstatus} = req.user
    res.status(200).json({ user:{ firstname, surname, location, userstatus}});

    //console.log(req.user)
    // User.findOne({ email: req.user.email }), exec((err, user) => {
    //     if (err) {
    //         res.status(500).json({
    //             message: 'error'
    //         })
    //     } else {
    //         res.status(200).json({
    //             user: firstname, surname, location, userstatus
    //         })
    //     }
    // })
})


router.post('/location', passport.authenticate('jwt', {session: false}), (req,res) =>{
        const { location } = req.body
        User.find({location: location }, (err, users)=>{
            if(err)
                res.status(500).json({message: 'error has occured'});
            else{
                res.status(200).json({users})
        
            }
        })
});

module.exports = router;