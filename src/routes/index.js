'use trict'
const express = require('express')
const router= express.Router()
router.use('/v1/api',require('./access/index'))
// router.get('',(req,res,next)=>{
//     res.status(200).json({
//         message:`Welcome ThanhPro`
//     })
// })

module.exports=router
