const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));


//current route
router.get('/',(req,res)=>{
    res.send('hello maps');
});


//exporting router
module.exports=router;

