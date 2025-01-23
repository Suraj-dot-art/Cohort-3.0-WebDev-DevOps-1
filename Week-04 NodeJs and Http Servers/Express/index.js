const express = require('express');

const app = express();

function sum(a, b) {
    return a + b;
}

app.get('/', (req, res) => {
    const result = sum(7, 8);
    console.log(result); // Log the result to the console
    res.send(`The sum is: ${result}`); // Send a response to the client
});

// Start the server
app.listen(1818, () => {
    console.log("Server started successfully on port 1818");
});
