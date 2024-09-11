const db = require("../db.js")

const Schema = db.Schema;

const aeroportoSchema = new Schema({
    nome : {    
        type: Schema.types.String(),
        required: true
    },
    endereco: {
        type: Number()
    },
})

const aeroporto = db.model("aeroporto", aeroportoSchema)


module.exports = aeroporto;