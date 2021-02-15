const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const mongoose = require('mongoose')

//getting country model
const Country = require('../models/countryM')


router.use(bodyParser.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    let countryName=req.query.name;
    Country.findOne({name: countryName},(err,countryData)=>{
        if(err){
            console.log(err);
        }
      //  console.log(countryData);
        res.render('country-home',{countryData});
    });
})

router.get('/:name/edit',async (req,res)=>{
    
    try{
        Country.findOne({"name":req.params.name},(err,countryData)=>{
        res.render('country-edit',{countryData:countryData});
        });
    }catch(e){
        res.redirect('/');
    }
    
})
router.put('/:id',async (req,res)=>{
    
    try{
        Country.findById(req.params.id,(err,countryData)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(countryData);
            }
            res.redirect('/');
        });
    }catch(e){
        res.redirect('/');
    }
})

module.exports = router;



/*
        country.capital_city=data.capital_city;
        country.largest_city=data.largest_city;
        country.total_area=data.total_area;
        country.land_Area=data.land_area;
        country.population=data.population;
        country.currency=data.currency;
        country.motto=data.motto;
        country.national_anthem=data.national_anthem;
        country.president=data.president;
        country.prime_minister=data.minister;
        country.supreme_leader=data.supreme_leader;
        country.time_zone=data.time_zone;
        country.description=data.description;
        country.official_name=data.official_name;
        */