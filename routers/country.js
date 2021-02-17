const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const mongoose = require('mongoose')

const utilities = require('../public/js/utilities')
const validateSearch=require('../public/js/validate-search')
//getting country model
const Country = require('../models/countryM')


router.use(bodyParser.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    let countryName=req.query.name;
    if(countryName==null){
        countryName=req.params.id;
    }
    if(validateSearch.isValidCountry(countryName)){
        Country.findOne({name: countryName},(err,countryData)=>{
            if(err){
                console.log(err);
            }
            res.render('country-home',{countryData});
        });
    }
    else{
        res.redirect('/');
    }
})

router.get('/:id/edit',async (req,res)=>{
    
    try{
        console.log(req.params.id)
        Country.findById(req.params.id,(err,countryData)=>{
            res.render('country-edit',{countryData:countryData});
        });
    }catch(e){
        res.redirect('/');
    }
    
})
router.put('/:id',async (req,res)=>{
    
    let countryData;
    let data=req.body;
    try{
        countryData = await Country.findById(req.params.id);
        //update data
        countryData.capital_city=utilities.removeExtraSpaces(data.capital_city);
        countryData.largest_city=utilities.removeExtraSpaces(data.largest_city);
        countryData.total_area=utilities.removeExtraSpaces(data.total_area);
        countryData.land_area=utilities.removeExtraSpaces(data.land_area);
        countryData.population=utilities.removeExtraSpaces(data.population);
        countryData.motto=utilities.removeExtraSpaces(data.motto);
        countryData.national_anthem=utilities.removeExtraSpaces(data.national_anthem);
        countryData.president=utilities.removeExtraSpaces(data.president);
        countryData.prime_minister=utilities.removeExtraSpaces(data.prime_minister);
        countryData.supreme_leader=utilities.removeExtraSpaces(data.supreme_leader);
        countryData.time_zone=utilities.removeExtraSpaces(data.time_zone);
        countryData.description=utilities.removeExtraSpaces(data.description);
        countryData.official_name=utilities.removeExtraSpaces(data.official_name);
        countryData.currency=utilities.removeExtraSpaces(data.currency);
    
        //
        await countryData.save();
        res.redirect('/country?name='+countryData.name);
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