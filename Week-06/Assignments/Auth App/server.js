const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const { dirname } = require('path');

const users = [];
app.use(express.json());
const JWT_SECRET = "suraj123";

// Create a middleware function to log the request method
function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}

//write this properly for your directories
// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "Assingnments/Auth App/public/index.html")
// })
// console.log(res.sendFile(__dirname + "Assingnments/Auth App/public/index.html"));



app.post("/signup", logger, function (req, res) {
    const { username, password } = req.body;

    if (users.find((user) => user.username === username)) {
        return res.json({
            message: "You are already signed up!",
        });
    }

    users.push({ username, password });

    res.json({
        message: "You are signed up successfully!",
    });
});

app.post("/signin", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign(
            {
                username, // username: foundUser.username,
            },
            JWT_SECRET
        );

        return res.json({
            message: "You have signed in successfully!",
            token: token,
        });
    } else {
        return res.json({
            message: "Invalid username or password!",
        });
    }
});

function auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({
            message: "Token is missing!",
        });
    }

    // Use a try-catch block to handle the error
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.username = decodedData.username;
        next();
    } catch (error) {
        return res.json({
            message: "Invalid token!",
        });
    }
}

app.get("/me", logger, auth, function (req, res) {
    const currentUser = req.username;

    const foundUser = users.find((user) => user.username === currentUser);

    if (foundUser) {
        return res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        return res.json({
            message: "User not found!",
        });
    }
});

app.listen(3000 , () =>{console.log("Running on Port 3000")});