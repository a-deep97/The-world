const express = require('express')
const mongoose = require('mongoose')

const app= express()

const DBurl='mongodb://127.0.0.1:27017/the_world'
mongoose.connect(DBurl,{useNewUrlParser:true})

app.set('view engine','ejs')

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))

const db= mongoose.connection
db.once('open',()=>{
    console.log('data base connected:',DBurl);
})


app.get('/',(req,res)=>{

    res.render('index');
})




app.listen(3000);