const express = require("express")          
const app = express()               

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;          
    if (age>=15){
        next();     
    }else{
        res.json({
            msg:"Sorry you are underage !"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride2"), function(req, res){
    res.json({
        msg:"You have succesfully riden ride 2",
    });
}

app.get("/ride1"), function(req, res){          
    res.json({
        msg:"You have succesfully riden ride 1",
    });
}


app.listen(3000 , ()=>{
    console.log("successFull")
});       
