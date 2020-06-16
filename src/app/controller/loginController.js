const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const login=mongoose.model('login');

router.get('/',(req,res)=>{
    res.render("singup/signup.ts",{
        viewTitle: "Register"
    });
});

router.post('/',(req,res)=>{
    if(req.body._id=='')
      insertRecord(req,res);
    else
      updateRecord(req,res);
});


function insertRecord(req, res) {
    var login = new login();
    login.username = req.body.username;
    login.email = req.body.email;
    login.mobile = req.body.mobile;
    login.city = req.body.city;
    login.save((err, doc) => {
        if (!err)
            res.redirect('signin');
        else 
        console.log('Error during signing in');
         
              
    });
}
router.get('/signup', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("signin/signin.ts", {
                signin: docs
            });
        }
        else {
            console.log('Error in retrieving id :' + err);
        }
    });
});

        
    



module.exports = router;
