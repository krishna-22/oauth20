
const GoogleStrategy= require("passport-google-oauth20").Strategy
const gusers = require('./models/userModel')
const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
  ];


const initialise=(passport)=>{
    passport.use(new GoogleStrategy({
        clientID:  '--'  ,
        clientSecret: '--',
        callbackURL: "http://localhost:3000/login",
        scope:scopes,
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
        gusers.findOne({ name:profile.username })
        .then((user)=>{
        if(user)
        done(null, user)
        else{
            gusers.insertMany([{name:profile.username,googleId: profile.id}])
            .then((user)=>done(null,user))
        }
    })
        .catch((err)=>done(err))
      }
    ));
    
    passport.serializeUser((user,done)=>{
        console.log('serial')
        console.log(user)
      done(null,user.id)
    })
    passport.deserializeUser(function(id, done) {
        console.log('deserial1')
        gusers.findById(id, function(err, user) {
            
            console.log(user)
          done(err, user);
        });
      });
}
module.exports=initialise