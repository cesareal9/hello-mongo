const db = require("../db.js")

const Schema = db.Schema;

const motoSchema = new Schema({
    marca : {    
        type: String,
        required: true,
    },
    cor: {
        type: String,
    required: true,
    },
    modelo : {
        type: String,
    required: true,
    },
    cilindrada: {
        type: Number(),
    },
    peso : {
        type: Number(),
    }
})

const moto = db.model("moto", motoSchema)



module.exports = moto;