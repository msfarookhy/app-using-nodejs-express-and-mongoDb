const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('passport');

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});


//for passport session midddleware
router.use(passport.initialize());

// /users/signup
router.post('/signup',(req,res)=>{

  db.User.register(new db.User({username:req.body.username}),req.body.password,(user)=>{
    if (err){
      console.log(err);
      res.render('signup');
    } else {
      passport.authenticate("local")(req,res,function(){
       
        res.redirect('/');
      })
    };
  })
})

//login autentication
router.post('/login',passport.authenticate("local",{
  successRedirect:'/',
  failureRedirect: '/login',
  failureFlash : true,
  successFlash : "welcome back to ths meeting!"

}),(req,res)=>{});

//logout 
router.get('/logout',(req,res)=>{
  req.logout();
  req.flash('u have to login to continue');
  res.redirect('/login');
  
});


module.exports = router;
