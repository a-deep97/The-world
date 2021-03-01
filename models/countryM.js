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
    population:{
        type:String
    },
    motto:{
        type:String
    },
    national_anthem:{
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
    }
})

module.exports = mongoose.model('Country',countrySchema,"countries");