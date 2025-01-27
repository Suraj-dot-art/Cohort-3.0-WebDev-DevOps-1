const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

const users = [];
app.use(express.json());
const JWT_SECRET = "suraj123";

app.post('/signUp', (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if (users.find((user) => user.username === username)) {
        // Send a response to the client that the user is already signed up
        return res.json({
            message: "You are already Signed up!",
        });
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "You have Signed Up successfully!!!"
    })
});

app.post('/signIn' , (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const foundUser = users.find((user) => user.username === username && user.password === password)
    console.log(username)
    if(foundUser){
        const token = jwt.sign(
            { 
                username: foundUser.username,
            },
            JWT_SECRET
        )
        res.json({
            token: token ,
            msg: "You have Signed In"
        })
    }else{
        res.status(404).json({
            msg: "Invalid Credentials"
        });
    }

});

app.get("/me", function (req, res) {
    const token = req.headers.token;       // Get the token from the request headers

    if (!token) {
        return res.json({
            message: "Token is missing!",
        });
    }

    // Decode the token using the jwt.decode() function
    // const decoded = jwt.decode(token);

    const userDetails = jwt.verify(token, JWT_SECRET);  // Verify the token using the jwt.verify() function
    const foundUser = users.find((user) => user.username === userDetails.username);

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        res.json({
            message: "Invalid token!",
        });
    }
});

app.listen(9000, ()=>{console.log("Port Running on 9000")});