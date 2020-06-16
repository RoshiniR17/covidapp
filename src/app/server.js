require('./database/db');
const express =require('express');
var app=express();
var router = express.Router();
var user= require('../database/user');

//const loginController = require('./database/loginController');

app.listen(3000,()=>{
    console.log('Express server started at aport : 3000');
});

//app.use('/signup',loginController);




//app.listen(3000,function(){
 //   console.log("hello world");
//});


router.get('/',function(req,res,next){
    res.render('index',{title:'Express'});

});



router.post('/signup',function(req,res ){
    var username=req.body.username;
   

    var city= req.body.city;
    var email = req.body.email;
    var mobileno=req.body.mobileno;
    var password = req.body.password;


    var newuser=new user();
    newuser.username=username;
  
    newuser.email=email;
    newuser.city=city;
    newuser.mobileno=mobileno;
    newuser.password=password;

    newuser.save(function(err,savedUSer)
    {
        if (err)
        {
            console.log(err);
            return res.status(500).send();
        }
        this.router.navigate['/signin'];
    })

    

})

router.post('/signin',function(req,res)
{
    var username=req.body.username;
    var password=req.body.password;

    user.findOne({username:username,password:password},function(err,user)
    {
        if(err)
        {
            console.log(err);
            return res.status(500).send();
        }
        if(!user)
        {
            alert('Invalid user');
            return res.status(200).send();
        }
    this.route.navigate['/home'];
    })
});
module.exports=router;