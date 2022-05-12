const { EntitySchema, RelationId } = require("typeorm")

module.exports = new EntitySchema({
    name: "Produto",
    tableName: "PRODUTO",
    columns: {
        IDPRODUTO: {
            primary: true,
            type: "int",
            generated: true
        },
        NOME: {
            type: "varchar",
            nullable: false,
        },
        QUANTIDADE: {
            type: "int",
            nullable: false
        }
    },
    //relations:{
        /*Prova:{
            type:"many-to-one",
            target:"Prova",
            joinColumn:{
                name: "PRODUTO"
            },
            inverseSide:"Produto" // É O PROVA 
        }*/
    //}
})
