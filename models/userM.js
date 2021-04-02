const mongoose = require('mongoose')

//schema
const userSchema = mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    _id:{
        type: String
    } ,
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String  
    }
    
})

module.exports = mongoose.model('User',userSchema,"Users");