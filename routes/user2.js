const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')


router.post('/', async(req,res)=>
{
    r=req.body.room
    const a = await (Leader.findOne({name2:'',room:r}))
    if(a==null)
    {
        res.send("no")
    }
    else
    {
    a.name2=req.body.name
    const l1=await a.save()
    res.json(l1)
    }    
})

module.exports=router