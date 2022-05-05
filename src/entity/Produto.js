const { EntitySchema } = require("typeorm")

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
    }
})