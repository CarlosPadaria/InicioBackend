const express = require('express');
const { getRepository } = require('typeorm');
/*
    Caso dar erro, rodar no terminal:
        yarn add reflect-metadata
    e colocar no topo do código:
        require("reflect-metadata")

*/
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

app.post("/users", async(req, res) => {
    const{EMAIL, SENHA, NOME} = req.body
    console.log(EMAIL,SENHA,NOME)
    
    //return res.json({EMAIL, SENHA, NOME});
    let userRepository = getRepository("User")

    const usuario = await userRepository.create();
    return res.status(200).json({usuario})
    
})
app.listen(3333, () => {
    console.log("mensagem fofa >-<")
})