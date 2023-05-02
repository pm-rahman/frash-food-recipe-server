const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const chefs = require('./Chefs.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Welcome to favourite food recipes')
})
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.listen(port,()=>{
    console.log(`your req listening by ${port}`)
})