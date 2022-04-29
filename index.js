const express = require('express');
const { getRepository, Repository } = require('typeorm');
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
    const{EMAIL, SENHA, NOME, IDUSUARIO} = req.body
    //console.log(req.body)
    
    //return res.json({EMAIL, SENHA, NOME});
    let userRepository = getRepository("User")

    let VerificarContaJaCadastrada = await userRepository.findOne({
        where: [
            {IDUSUARIO: `${IDUSUARIO}`}
        ]
    })
    console.log(VerificarContaJaCadastrada);

    if(VerificarContaJaCadastrada === null)
    {
        const usuario = await userRepository.insert(
            req.body
        );

        return res.status(200).json({usuario})
    }
    else
    {
        return res.status(400).json({message:"Conta ja cadastrada"});
    }
   // console.log(VerificarContaJaCadastrada)
    
    
})

app.get("/users/:IDUSUARIO", async (req, res) =>{
    console.log(req.params);
    
    let userRepository = getRepository("User")

    let usuario = await userRepository.findOne({
        where: [
            {IDUSUARIO: req.params.IDUSUARIO}
        ]
    })
   
    if (usuario === null)
    {
        return res.status(400).json({message:"Usuário não encontrado!"})
    }
    else
    {
        return res.status(200).json({usuario})
    }
})

app.patch("/users/:IDUSUARIO", async (req, res) =>{
    console.log(req.params);
    
    let userRepository = getRepository("User")

    let usuario = await userRepository.findOne({
        where: [
            {IDUSUARIO: req.params.IDUSUARIO}
        ]
    })
    let alterarSenha
    if (usuario === null)
    {
        return res.status(400).json({message:"Usuário não encontrado!"})
    }
    else
    {
        alterarSenha = await userRepository.update(
            req.params.IDUSUARIO, {SENHA: `${req.body.SENHA}`}
        )
        usuario.SENHA = req.body.SENHA
        return res.status(200).json({usuario})
    }
})

app.listen(3333, () => {
    console.log("mensagem fofa >-<")
})