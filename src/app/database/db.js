const mongoose = require('mongoose');

mongoose.connnect('mongodb://localhost:27017/Logindb',{userNewURlParser: true},(err)=>{
    if(!err)
    {
        console.log('Mongodb Connection Succeded')
    }
    else
    {
        console.log('Error in DB connection:'+err)
    }
});

require('./login.model');