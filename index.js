const express = require('express');
const { getRepository, Repository } = require('typeorm');
/*
    Caso dar erro, rodar no terminal:
        yarn add reflect-metadata
    e colocar no topo do código:
        require("reflect-metadata")

*/
const database = require("./src/database");
const Produto = require('./src/entity/Produto');
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
app.get("/produtos", async (req, res) =>{
    //req.body
    let productRepository = getRepository("Produto");
    

    const produto = await productRepository.find();

    return res.status(200).json({produto})

})

app.get("/provas", async (req, res) =>{
    //req.body
    let provasRepository = getRepository("Prova");
    

    const prova = await provasRepository.find();

    return res.status(200).json({prova})

})

app.put("/produtos/:IDPRODUTO", async (req, res) =>{
    const{QUANTIDADE, NOME} = req.body
    
    let productRepository = getRepository("Produto")


        alterarDADOS = await productRepository.update(
            req.params, {NOME: `${req.body.NOME}`, QUANTIDADE: `${req.body.QUANTIDADE}`}
        )
       
        return res.status(200).json(req.body)
    
})

app.delete("/produtos/:IDPRODUTO", async(req, res) => {


    let productRepository = getRepository("Produto")

    req.body =  await productRepository.findOne({
        where: [
            {IDPRODUTO: req.params.IDPRODUTO}
        ]
    })
    let DeletarProduto = await productRepository.delete({
       IDPRODUTO: `${req.params.IDPRODUTO}`
    })

    if(req.body === null)
    {
        return res.status(400).json({message:"Produto não encontrado"});
    }
    else
    {
        return res.status(200).json(req.body);
    }
})

app.post("/produtos", async(req, res) => {
    const{QUANTIDADE, NOME} = req.body
    //console.log(req.body)
    
    //return res.json({EMAIL, SENHA, NOME});
    let productRepository = getRepository("Produto")
    console.log(req.body)
    const produto = await productRepository.insert(
        req.body
    );
    console.log(req.body)
    return res.status(200).json(req.body)
    
   // console.log(VerificarContaJaCadastrada)
    
    
})

app.get("/produtos/:IDPRODUTO", async (req, res) =>{
    console.log(req.params);
    
    let productRepository = getRepository("Produto")

    let produto = await productRepository.findOne({
        where: [
            {IDPRODUTO: req.params.IDPRODUTO}
        ]
    })
   
    if (produto === null)
    {
        return res.status(400).json({message:"Produto não encontrado!"})
    }
    else
    {
        return res.status(200).json({produto})
    }
})

/*app.patch("/users/:IDPRODUTO", async (req, res) =>{
    console.log(req.params);
    
    let userRepository = getRepository("User")

    let produto = await userRepository.findOne({
        where: [
            {IDPRODUTO: req.params.IDUSUARIO}
        ]
    })

    if (produto === null)
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
})*/

app.listen(3333, () => {
    console.log("mensagem fofa >-<")
})