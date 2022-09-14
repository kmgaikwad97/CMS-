
const mongoose = require('mongoose')
const port = 3001;

const express = require('express')
const app = express()

app.use(express.json());

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port,()=>{
    console.log(`Connected to the port ${port}`);
})