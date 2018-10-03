var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var {loggedIn} = middleware;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/',(req,res)=>{
res.render('/');
});
//login rout
router.get('/login',(req,res)=>{
  res.render('login');
});

// signuprout

router.get('/signup',(req,res)=>{
  res.render('signup');
});



module.exports = router;
