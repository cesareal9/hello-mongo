const db = require("./db.js")

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
    porcentagem_suco : {    
        type: Schema.types.Number,
    },
    kcal200ml: {
        type: Schema.type.Number,
    },
    sabor : {
        type: Schema.types.String,
    },
    tamanhoML : {
        type: Schema.types.Number
    }
})

const refrigerante = db.model("index", refrigeranteSchema)



module.exports = refrigerante;