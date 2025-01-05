const express = require('express')      // similar to require http
const app = express()

app.get('/', function (req, res) {      
  res.send('Hello World') 
})

app.get('/virat', function (req, res) {   
  res.send('Hello from AB de Villiers')
})


app.listen(3000, () => {console.log("successFULL")})


//install node_modules