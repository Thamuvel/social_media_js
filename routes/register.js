const express=require("express");
const app=express();
const router=express.Router();


router.get('/',(req,res)=>{
    const PageData={
        tittle:"RegisterPage"
    }
    res.status(200).render("registerForm",PageData);
})


module.exports=router;