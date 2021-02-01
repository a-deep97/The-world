const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    let countryName=req.query.name;
    console.log(countryName);
    res.render('country-home');
})




module.exports = router;