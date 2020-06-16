var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    username:{type : String, unique : true,required : true},
    Email:{type: String, unique:true},
    City:{type:String},
    Mobileno:{type:String},
   
    password : {type:String }
});

var User = mongoose.model('login',loginSchema);

module.exports =User; 