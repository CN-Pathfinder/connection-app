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
        const { location, userstatus } = req.body
        User.find({location: location, userstatus: userstatus }, 'firstname location', (err, users)=>{
            if(err)
                res.status(500).json({message: 'error has occured'});
            else{
                res.status(200).json(users)
        
            }
        })
});

router.get('/location', passport.authenticate('jwt', {session: false}), (req,res) =>{
    const { location, userstatus } = req.user
    User.find({location: location, userstatus: userstatus }, 'firstname location', (err, users)=>{
        if(err)
            res.status(500).json({message: 'error has occured'});
        else{
            res.status(200).json(users)
    
        }
    })
    

})

router.get('/logout', passport.authenticate('jwt',{session : false}), (req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{email: ""}, success : true});
});

module.exports = router;




// // router.get('/allreturned:location', passport.authenticate('jwt', {session: false}, (req, res) =>{
    
// //     User.find({location: req.params.location }, 'firstname location', (err, users)=>{
// //         if(err)
// //             res.status(500).json({message: 'error has occured'});
// //         else{
// //             res.status(200).json(users)
// //         }
// //     })
// // }));


//delete a user

// router.post('/delete', async (req,res)=>{
//     let user = req.body;
//     console.log(user._id);

//     await User.findByIdAndDelete({_id: user._id}).exec((err,doc)=>{
//         console.log(document);
//         if(err) {
//             res.status(500).json({message: 'error});
//         }
//         else {
//             res.status(200).json({doc, authenticated : true});
//         }
//     })

// });
