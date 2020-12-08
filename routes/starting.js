const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    id = req.body.id
    const a = await (Leader.findOne({_id: id}))
    var d=new Date();
    a.stime=d.getTime();
    const l1=await a.save()
    res.json(l1)    
})

module.exports=router