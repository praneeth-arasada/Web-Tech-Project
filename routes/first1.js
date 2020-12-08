const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    id = req.body.id
    const a = await (Leader.findOne({_id: id}))
    a.f1=req.body.f1
    const l1=await a.save()
    res.json(l1)    
})

module.exports=router