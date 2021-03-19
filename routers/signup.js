const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const bcrypt = require('bcrypt')

//getting temporary user variable where user creds stored(only development purpose)
let USERS=require('../users');


router.use(bodyParser.urlencoded({extended:true}));


//main route
router.get('/',(req,res)=>{
    res.render('signup-page',{req:req});
});

//post route
router.post('/',async (req,res)=>{
   try{
       //hashing user password
       const hashedPassword = await bcrypt.hash(req.body.password,12);
       USERS.push({
           id: req.body.name+req.body.name,
           name: req.body.name,
           email: req.body.email,
           password: hashedPassword
       });
       console.log(USERS);
       console.log('signed up');
       res.redirect('login')
   } catch{
       console.log('couldn\'t sign up ');
       res.redirect('register');
   }
});

//exporting route
module.exports=router;