const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();


router.use(bodyParser.urlencoded({extended:true}));


//main route
router.get('/',(req,res)=>{
    res.render('signup-page');
});


//exporting route
module.exports=router;