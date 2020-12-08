const mongoose= require('mongoose')
 const leaderschema= new mongoose.Schema({
     
    name1: 
    {
        type:String
    },
    name2: 
    {
        type:String
    },
    time: 
    {
        type:Number 
    },
    room:
    {
        type:Number
    },
    stime:
    {
        type:Number
    },
    etime:
    {
        type:Number
    },
    f1:
    {
        type:Boolean
    },
    f2:
    {
        type:Boolean
    },
    f3:
    {
        type:Boolean
    },
    s1:
    {
        type:Boolean
    },
    s2:
    {
        type:Boolean
    },
    s3:
    {
        type:Boolean
    }
    
 })

 module.exports=mongoose.model('leader',leaderschema)