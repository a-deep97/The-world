const mongoose = require('mongoose')


//schema
const countrySchema =mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
    }
})

module.exports = mongoose.model('Country',countrySchema);