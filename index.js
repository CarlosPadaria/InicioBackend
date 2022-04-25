const express = require('express')()

require("./src/database")()

let app = express();

app.use(express.json())

app.listen(3333, () => {
    console.log("mensagem fofa >-<")
})