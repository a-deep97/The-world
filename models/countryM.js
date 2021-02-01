const mongoose = require('mongoose')


//schema
const countrySchema =mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
    }
})

module.exports = mongoose.model('Country',countrySchema);