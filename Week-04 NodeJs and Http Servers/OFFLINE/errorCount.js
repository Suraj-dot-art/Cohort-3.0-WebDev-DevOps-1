// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
// const app = express();
// let errorCount = 0;
// app.get('/user', function(req, res) {
//     throw new Error("User not found");
//     res.status(200).json({ name: 'john' });
//   });
  
//   app.post('/user', function(req, res) {
//     res.status(200).json({ msg: 'created dummy user' });
//   });
  
//   app.get('/errorCount', function(req, res) {
//     res.status(200).json({ errorCount });
//   });
  
//   module.exports = app;

const express = require('express')
const app = express()

let errorCount = 0;

app.use((err,req,res,next) =>{          //if there is any error in the code it wont send 500 now
    res.status(404).send({})            // it will send 404 error this is called error handling middleware
}) 

app.get('/user', function(req, res) {
    throw new Error("User not found");
    res.status(200).json({ name: 'john' });
  });
  
  app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
  });
  
  app.get('/errorCount', function(req, res) {
    res.status(200).json({ errorCount });
  });

  app.listen(9000)
