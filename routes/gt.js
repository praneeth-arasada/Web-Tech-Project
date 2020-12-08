const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')



router.get('/:id', async(req,res)=>
{
    const a=await Leader.findById(req.params.id)
    res.send(a)
})

module.exports=router