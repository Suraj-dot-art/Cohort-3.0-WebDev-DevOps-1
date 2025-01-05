const http = require("http")

const createMy = http.createServer((req,res) => {
    res.end("VIRAT IS THE GOAT OF CRICKET");
});

createMy.listen(8000, () => {console.log("SuccessFull")});



//install node_modules