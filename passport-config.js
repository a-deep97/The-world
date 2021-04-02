
const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy
const bcrypt=require('bcrypt')
const userM=require('./models/userM')

const authenticateUser=async (email,password,done)=>{

    userM.findOne({email:email},async (err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(user==null){
                return done(null,false,{message:"No user with that email"});
            }
            try{
                if(await bcrypt.compare(password,user.password)){
                    return done(null,user);
                } 
                else{
                    return done(null,false,{message:'Password incorrect'})
                }
            }catch(e){
                return done(e);
            }
        }
    });
}
passport.use(new LocalStrategy({usernameField:'email'},authenticateUser));
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    return done(null, userM.findOne({_id:id}));
});

module.exports=passport;