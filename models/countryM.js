const mongoose = require('mongoose')


//schema
const countrySchema = mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    _id:{
        type: String
    } ,
    name:{
        type: String,
    },
    code:{
        type: String,
    },
    capital_city:{
        type: String
    },
    largest_city:{
        type:String
    },
    total_area:{
        type:String
    },
    land_area:{
        type:String
    },
    motto:{
        type:String
    },
    president:{
        type:String
    },
    prime_minister:{
        type:String
    },
    supreme_leader:{
        type:String
    },
    time_zone:{
        type:String
    },
    description:{
        type:String
    },
    official_name:{
        type:String
    },
    currency:{
        type: String
    },
    capital_coordinates:{
        type: Array,
        default: [0,0]
    },
    water:{
        type: String
    },
    estimate_population:{
        type: String
    },
    last_census_population:{
        type: String
    },
    GDP_PPP:{
        type: Array,
        default: [0,0]
    },
    GDP_nominal:{
        type: Array,
        default: [0,0]
    },
    driving_side:{
        type: String
    },
    calling_code:{
        type: String
    },
    population_density:{
        type: String
    },
    demonym:{
        type: String
    },
    gini:{
        type: String
    },
    HDI:{
        type: String
    },
    religion:{
        type: String
    },
    membership:{
        type: String
    },
    official_languages:{
        type: String
    },
    formation:{
        type: String
    },
    ethinic_groups:{
        type: String
    },
    national_anthem_local:{
        type: String
    },
    national_anthem_english:{
        type: String
    },
    national_song:{
        type:String
    },
    population_growth_rate:{
        type: String
    }
})

module.exports = mongoose.model('Country',countrySchema,"countries");