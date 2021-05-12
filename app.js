require('dotenv').config();

// Installing libraries
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const passport = require('./passport-config')
const flash=require('express-flash')
const session=require('express-session')

const countryNames=require('./public/js/countries')


// getting country router
const countryRouter =require('./routers/country')
// getting maps router
const gMap=require('./routers/g-map')
//getting login router
const loginRouter=require('./routers/login')
//getting signup router
const signupRouter=require('./routers/signup')

//aquiring express function 
const app= express()

/*
// local database path url
const DBurl='mongodb://127.0.0.1:27017/the_world'
*/

//connected to database
mongoose.connect(process.env.DB_URL,{useUnifiedTopology: true,useNewUrlParser:true})

//engine type setup
app.set('view engine','ejs')

//
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'public/js'))
app.use(methodOverride('_method'))

//
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//checking database connection validity
const db= mongoose.connection
db.once('open',()=>{
    console.log('data base connected:',process.env.DB_URL);
})


//get method for home page
app.get('/',(req,res)=>{

    if(req.isAuthenticated()){
        console.log('authenticated');
    }
    else{
        console.log('not authenticated');
    }
    res.render('index',{countryNames:countryNames.countries_with_code,req:req});
})
//use method for country router 
app.use('/country',countryRouter)
//use method for map router
app.use('/maps',gMap)
//use login router
app.use('/login',loginRouter)
//use signup router
app.use('/signup',signupRouter)

//logout user
app.delete('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/');
})

// app listening to port 3000
app.listen(3000);