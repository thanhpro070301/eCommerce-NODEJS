'use strict'

class AccessController{
    signUp=async(req,res,next)=>{
        try{
            console.log(`[P]::signUp::`,req.body)
            /*

            */
            return res.status(200).json({
                code:'2001',
                metadata:{userId:1}
            })

        }catch(error){
            next()
        }
           
    }

}

module.exports=new AccessController()