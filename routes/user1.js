const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    const l =new Leader(
        {
            name1:req.body.name,
            name2:'',
            time:100000000,
            room:Math.floor(Math.random()*1000),
            stime:0,
            etime:0,
            f1:false,
            f2:false,
            f3:false,
            s1:false,
            s2:false,
            s3:false
        })
    l1=await l.save()
    res.json(l1) 
})

module.exports=router