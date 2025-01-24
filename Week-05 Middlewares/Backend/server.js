const express = require('express')
const cors = require("cors")
const app = express()

app.use(express.json())  //if u didnt use this req.body would be undefined
app.use(cors())

app.post('/sum' , (req,res) =>{
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    
    res.json({
        answer : a+b
    })
})

app.listen(4000 , ()=> console.log("server running on port 4000"));