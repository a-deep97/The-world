const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const mongoose = require('mongoose')

//getting country model
const Country = require('../models/countryM')

// database path url
const DBurl='mongodb://127.0.0.1:27017/the_world'

//connected to database
mongoose.connect(DBurl,{useNewUrlParser:true})
//checking connection validity
const db= mongoose.connection
db.once('open',()=>{
    console.log('data base connected:',DBurl);
})



router.use(bodyParser.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    let countryName=req.query.name;
    Country.findOne({name: countryName},(err,countryData)=>{
        if(err){
            console.log(err);
        }
        console.log(countryData);
        res.render('country-home',{countryData});
    });
})

router.get('/:name/edit',async (req,res)=>{
    
    try{
        const countryData = await Country.findOne({"name":req.params.name});
        res.render('country-edit',{countryData:countryData});

    }catch(e){
        res.redirect('country/:name');
    }
    
})
router.put('/:name',async (req,res)=>{
    console.log(req.body);
    res.redirect('/');
    /*
    const country =  new Country({
        name: req.body.name
    });
    try{
        country = await Country.findById(req.params.id);
        await country.save();
        console.log(country);
        res.redirect('/${country.id}');
    }catch{
        res.render('/${country.id}',{
            country: country,
            errorMessage: 'error updating'
        })
    }
    */
})

module.exports = router;