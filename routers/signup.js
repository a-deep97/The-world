const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const bcrypt = require('bcrypt')

//getting user model
const userM=require('../models/userM')

router.use(bodyParser.urlencoded({extended:true}));


//main route
router.get('/',(req,res)=>{
    if(!req.isAuthenticated()){
        res.render('signup-page',{req:req});
    }
    else{
        res.redirect('/');
    }
});

//post route
router.post('/',async (req,res)=>{
   try{
       //hashing user password
       const hashedPassword = await bcrypt.hash(req.body.password,12);
       const newUser= new userM({
           _id:req.body.first_name+req.body.last_name+req.body.email,
           first_name: req.body.first_name,
           last_name: req.body.last_name,
           email: req.body.email,
           password: hashedPassword
       });
       newUser.save();
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