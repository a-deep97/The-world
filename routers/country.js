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

router.get('/:id/edit',async (req,res)=>{
    
    try{
        console.log(req.params.id)
        Country.findById(req.params.id,(err,countryData)=>{
            console.log(countryData);
        res.render('country-edit',{countryData:countryData});
        });
    }catch(e){
        res.redirect('/');
    }
    
})
router.put('/:id',async (req,res)=>{
    
    let countryData;
    try{
        countryData = await Country.findById(req.params.id);
        console.log(countryData);
        //update data
        //
        await countryData.save();
        res.redirect('/');
    }catch(e){
        res.redirect('/');
    }
    /*
    try{
        console.log(req.params.id);
        Country.findById(req.params.id,async (err,countryData)=>{
            if(err){
                console.log(err);
            }
            else{
                countryData.name="India";
                await countryData.save();
            }
            Country.findById(req.params.id,(err,data)=>{
                console.log(data);
            })
            res.redirect('/');
        });
    }catch(e){
        res.redirect('/');
    }
    */
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