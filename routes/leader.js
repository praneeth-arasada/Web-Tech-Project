const express=require('express')
const router= express.Router()
const Leader=require('../models/leader')




router.get('/', async(req,res)=>
{
   
    const k=await Leader.find().sort({time:1}).limit(10);
    res.json(k)
})





/*
router.get('/:id', async(req,res)=>
{
    const alien =new Alien(
        {
            name:'nkbhsb',
            tech:'C',
            sub:true
    
        })
    a1= alien.save()
    res.json(alien)
    
    
    //const aliens=Alien.find()
    //res.json(aliens)
    const a=await Alien.findById(req.params.id)
    res.send(a)
})
*/




module.exports=router