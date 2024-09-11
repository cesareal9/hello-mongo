const db = require("../db.js")

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    porcentagem_suco : {    
        type: String,
    required: true,
    },
    kcal200ml: {
        type: Number(),
    },
    sabor : {
        type: String,
    required: true,
    },
    tamanhoML : {
        type: Number()
    },
})

const refrigerante = db.model("refrigerante", refrigeranteSchema)



module.exports = refrigerante;