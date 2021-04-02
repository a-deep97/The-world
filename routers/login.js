require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const passport=require('passport')


router.use(bodyParser.urlencoded({extended:true}));

//main route
router.get('/',(req,res)=>{
    if(!req.isAuthenticated()){
        res.render('login-page',{req:req});
    }
    else{
        res.redirect('/');
    }
});

//login post route
router.post('/',passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: 'login',
    failureFlash: true
}));

//exporting route
module.exports=router;