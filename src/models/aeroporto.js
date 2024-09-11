const db = require("./db.js")

const Schema = db.Schema;

const aeroportoSchema = new Schema({
    nome : {    
        type: Schema.Types.String,
        required: true
    },
    endereco: {
        type: Schema.Types.String,
        required: true 
    },
})

const aeroporto = db.model("aeroporto", aeroportoSchema)


module.exports = aeroporto();