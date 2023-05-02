const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const chefs = require('./Chefs.json')
const recipes = require('./recipes.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Welcome to favourite food recipes')
})
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.get('/chefs/:id',(req,res)=>{
    const id = req.params.id;
    const chefRecipes = recipes.filter(r=> r.chefId === id);
    res.send(chefRecipes);
})
app.get('/recipes',(req,res)=>{
    res.send(recipes);
})
app.listen(port,()=>{
    console.log(`your req listening by ${port}`)
})