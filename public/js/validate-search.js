
const country_list=require('../js/countries');

function isValidCountry(country_name){

    if(country_list.countries.includes(country_name)){
        return true;
    }
    return false;
}

module.exports={isValidCountry};