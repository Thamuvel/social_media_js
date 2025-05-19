const express=require("express");
const app=express();
const router=express.Router();

router.get('/',(req,res)=>{
    const PageData={
        tittle:"LoginPage"
    }
    res.status(200).render("Login",PageData);
})


module.exports=router;