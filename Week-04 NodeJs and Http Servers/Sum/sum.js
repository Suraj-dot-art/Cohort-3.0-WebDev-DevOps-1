const express = require ("express")
const app = express()

function sum(n){
    let ans = 1;
    for (let i = 0; i <=n; i++) {
        ans = ans +i;  
    }
    return ans;
}

app.get("/", function(req, res){            
    const n = req.query.n;
    const ans = sum(10);
    res.send("Hello your requested sum is " + ans );
})



app.listen(9999, () => {console.log("successFull")})

//install node_modules