const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));

//gmap api key
const gmapApiKey=process.env.GMAP_API_KEY;

//object passed to map view page(more variable mayt be added accordingly)
let passingObject={gmapApiKey};

//current route
router.get('/',(req,res)=>{

    res.render('g-map',{passingObject});
});


//exporting router
module.exports=router;

