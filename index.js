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

app.put("/produtos", async (req, res) =>{
    const{IDPRODUTO, QUANTIDADE, NOME} = req.body
    
    let productRepository = getRepository("Produto")

    let produto = await productRepository.findOne({
        where: [
            {IDPRODUTO: req.body.IDPRODUTO}
        ]
    })

    if (produto === null)
    {
        return res.status(400).json({message:"PRODUTO não encontrado!"})
    }
    else
    {
        alterarDADOS = await productRepository.update(
            req.body.IDPRODUTO, {NOME: `${req.body.NOME}`, QUANTIDADE: `${req.body.QUANTIDADE}`}
        )
        produto.NOME = req.body.NOME
        produto.QUANTIDADE = req.body.QUANTIDADE
        return res.status(200).json({produto})
    }
})

app.delete("/produtos", async(req, res) => {

    const{IDPRODUTO} = req.body
    let productRepository = getRepository("Produto")

    let DeletarProduto = await productRepository.delete({
       IDPRODUTO: `${IDPRODUTO}`
    })

    if(DeletarProduto === null)
    {
        return res.status(400).json({message:"Produto não encontrado"});
    }
    else
    {
        return res.status(200).json(req.body);
    }
})

app.post("/produtos", async(req, res) => {
    const{IDPRODUTO, QUANTIDADE, NOME} = req.body
    //console.log(req.body)
    
    //return res.json({EMAIL, SENHA, NOME});
    let productRepository = getRepository("Produto")

    let VerificarProdutoJaCadastrado = await productRepository.findOne({
        where: [
            {IDPRODUTO: `${IDPRODUTO}`}
        ]
    })
    console.log(VerificarProdutoJaCadastrado);

    if(VerificarProdutoJaCadastrado === null)
    {
        const produto = await productRepository.insert(
            req.body
        );

        return res.status(200).json({produto})
    }
    else
    {
        return res.status(400).json({message:"Conta ja cadastrada"});
    }
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