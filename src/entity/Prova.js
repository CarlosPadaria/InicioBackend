const { EntitySchema, RelationId } = require("typeorm")
module.exports = new EntitySchema({
    
    name: "Prova",
    tableName: "PROVA",
    columns: {
        IDPROVA:{
            primary: true,
            type: "int",
            generated: true
        },
        IDPRODUTO: {
            primary: true,
            type: "int"
            
        },
        DATA_PROVA: {
            type: "date",
            nullable: false
        },
        NOTA: {
            type: "float",
            nullable: false
        }
    }
})
