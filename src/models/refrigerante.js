const db = require("../db.js")

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    porcentagem_suco : {    
        type: Schema.Types.String,
    required: true,
    },
    kcal200ml: {
        type: Schema.Types.Number,
    },
    sabor : {
        type: Schema.Types.String,
    required: true,
    },
    tamanhoML : {
        type: Schema.Types.Number
    },
})

const refrigerante = db.model("refrigerante", refrigeranteSchema)



module.exports = refrigerante();