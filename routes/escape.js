const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    id = req.body._id
    const a = await (Leader.findOne({_id: id}))
    var d=new Date();
    a.etime=d.getTime();
    a.time=a.etime-a.stime;
    const l1=await a.save()
    res.json(l1)    
})

module.exports=router