const db=require("mongoose");
class Database{
    constructor(){
        this.connect();
    }
    connect(){
    db.connect("mongodb://localhost:27017/Social_Media").then(()=>console.log("database Connect Sucessfully")).catch((err)=>console.log(err) )
    }
}
module.exports= new Database