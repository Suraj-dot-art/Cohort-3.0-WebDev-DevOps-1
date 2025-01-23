const express = require('express')
const app = express();

const users = [{
    userName: "Virat Kohli",
    kidneys: [{
        health: true
    }]
}];

app.use(express.json());

app.get('/', (req,res) =>{
    const viratKidneys = users[0].kidneys;
    const noOfKidneys = viratKidneys.length;

    let healthyKidneys = 0; // Use 'let' instead of 'const' since this value will change
    for (let i = 0; i < noOfKidneys; i++) {
        if (viratKidneys[i].health) {
            healthyKidneys++;
        }
    }

    const unhealthyKidneys = noOfKidneys - healthyKidneys; 

    res.json({
        // viratKidneys,
        noOfKidneys,
        healthyKidneys,
        unhealthyKidneys,
    })
})

app.post('/' , (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "done!!"
    })
})

app.listen(1000,()=> {console.log("successfull Kidneys")});