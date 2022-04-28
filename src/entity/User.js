const { EntitySchema } = require("typeorm")

module.exports = new EntitySchema({
    name: "User",
    tableName: "USUARIO",
    columns: {
        IDUSUARIO: {
            primary: true,
            type: "int",
            generated: true
        },
        EMAIL: {
            type: "varchar",
            nullable: false,
            unique: true
        },
        SENHA: {
            type: "varchar",
            nullable: false
        },
        NOME: {
            type: "varchar",
            nullable: false
        }
    }
})