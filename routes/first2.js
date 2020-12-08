const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    id = req.body.id
    const a = await (Leader.findOne({_id: id}))
    a.f2=req.body.f2
    const l1=await a.save()
    res.json(l1)    
})

module.exports=router