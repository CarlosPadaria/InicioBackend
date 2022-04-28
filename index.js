const express = require('express');
const { getRepository } = require('typeorm');

const database = require("./src/database");
const User = require('./src/entity/User');
database()

let app = express();

app.use(express.json())

app.get("/", (req, res) =>{
    //req.body
    if(true)
    {
         return res.status(200).json({mensagem: "Hello, World"})
    }
    else
    {
        return res.status(404).json({status:"Falha"})
    }
   
})
app.get("/users", async (req, res) =>{
    //req.body
    let userRepository = getRepository("User");
    
    const usuarios = await userRepository.find();
    return res.status(200).json({usuarios})
})

app.listen(3333, () => {
    console.log("mensagem fofa >-<")
})