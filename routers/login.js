require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const passport=require('passport')
const flash=require('express-flash')
const session=require('express-session')


//getting temp user file(for development purpose only)
const USER= require('../users');

//getting passport config
const initializePassport = require('../passport-config')
initializePassport(
    passport,
    (email)=>{return USER.find(user=>user.email===email)},
    (id)=>{return USER.find(user=>user.id===id)}
);


router.use(bodyParser.urlencoded({extended:true}));

//main route
router.get('/',(req,res)=>{
    res.render('login-page',{req:req});
});

//login post route
router.post('/',passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: 'login',
    failureFlash: true
}));

//exporting route
module.exports=router;