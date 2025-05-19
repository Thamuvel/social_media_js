const express= require("express");
const app= express();
const path=require('path')
const port ="3000";
const database=require("./db/dbConnect")
const reg_Router=require('./routes/register');
const login_Router=require('./routes/login');
const static_uri=path.join(__dirname,'public');

app.use('/register',reg_Router);
app.use("/Login",login_Router)

app.set("view engine","pug");
app.set("views","views");
app.use(express.static(static_uri));

app.get("/",(req,res)=>{
    res.send("home Page")
})

app.listen(port,()=>{
    console.log(`Sucessfully running at ${port}`)
})