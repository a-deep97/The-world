// Installing libraries
const express = require('express')
const mongoose = require('mongoose')

//aquiring express function 
const app= express()

// database path url
const DBurl='mongodb://127.0.0.1:27017/the_world'

//connected to database
mongoose.connect(DBurl,{useNewUrlParser:true})

//engine type setup
app.set('view engine','ejs')

//
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))

//checking connection validity
const db= mongoose.connection
db.once('open',()=>{
    console.log('data base connected:',DBurl);
})

//get method for home page
app.get('/',(req,res)=>{

    res.render('index');
})



// app listening to port 3000
app.listen(3000);