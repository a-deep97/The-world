const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const mongoose = require('mongoose')

const utilities = require('../public/js/string-utilities')
const validateSearch=require('../public/js/validate-search')
const authenticationStatus=require('../authentication-status')

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
            //gmap api key
            const gmapApiKey=process.env.GMAP_API_KEY;
            res.render('country-home',{countryData,gmapApiKey,req:req});
        });
    }
    else{
        res.redirect('/');
    }
})

router.get('/:id/edit',async (req,res)=>{
    
    if(!authenticationStatus(req,res)){
        res.redirect('/login');
    }
    else{
        try{
            console.log(req.params.id)
            Country.findById(req.params.id,(err,countryData)=>{
                res.render('country-edit',{countryData:countryData,req:req});
            });
        }catch(e){
            res.redirect('/');
        }
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
        countryData.motto=utilities.removeExtraSpaces(data.motto);
        countryData.president=utilities.removeExtraSpaces(data.president);
        countryData.prime_minister=utilities.removeExtraSpaces(data.prime_minister);
        countryData.supreme_leader=utilities.removeExtraSpaces(data.supreme_leader);
        countryData.time_zone=utilities.removeExtraSpaces(data.time_zone);
        countryData.description=utilities.removeExtraSpaces(data.description);
        countryData.official_name=utilities.removeExtraSpaces(data.official_name);
        countryData.currency=utilities.removeExtraSpaces(data.currency);
        countryData.capital_coordinates[0]=utilities.removeExtraSpaces(data.capital_latitude);
        countryData.capital_coordinates[1]=utilities.removeExtraSpaces(data.capital_longitude);
        countryData.water=utilities.removeExtraSpaces(data.water);
        countryData.estimate_population=utilities.removeExtraSpaces(data.estimate_population);
        countryData.last_census_population=utilities.removeExtraSpaces(data.census_population);
        countryData.GDP_PPP[0]=utilities.removeExtraSpaces(data.total_ppp_gdp);
        countryData.GDP_PPP[1]=utilities.removeExtraSpaces(data.per_capital_ppp_gdp);
        countryData.GDP_nominal[0]=utilities.removeExtraSpaces(data.total_nominal_gdp);
        countryData.GDP_nominal[1]=utilities.removeExtraSpaces(data.per_capita_nominal_gdp);
        countryData.driving_side=utilities.removeExtraSpaces(data.driving_side);
        countryData.calling_code=utilities.removeExtraSpaces(data.calling_code);
        countryData.population_density=utilities.removeExtraSpaces(data.population_density);
        countryData.population_growth_rate=utilities.removeExtraSpaces(data.population_growth_rate);
        countryData.demonym=utilities.removeExtraSpaces(data.demonym);
        countryData.gini=utilities.removeExtraSpaces(data.gini);
        countryData.HDI=utilities.removeExtraSpaces(data.hdi);
        countryData.religion=utilities.removeExtraSpaces(data.religion);
        countryData.membership=utilities.removeExtraSpaces(data.membership);
        countryData.official_languages=utilities.removeExtraSpaces(data.official_languages);
        countryData.formation=utilities.removeExtraSpaces(data.formation);
        countryData.ethinic_groups=utilities.removeExtraSpaces(data.ethinic_groups);
        countryData.national_anthem_local=utilities.removeExtraSpaces(data.national_anthem_local);
        countryData.national_anthem_english=utilities.removeExtraSpaces(data.national_anthem_english);
        countryData.national_song=utilities.removeExtraSpaces(data.national_song);

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