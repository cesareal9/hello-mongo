const db = require("./db.js")

const Schema = db.Schema;

const motoSchema = new Schema({
    marca : {    
        type: Schema.types.String,
        required: true
    },
    cor: {
        type: Schema.type.String,
    },
    modelo : {
        type: Schema.type.String,
    },
    cilindrada: {
        type: Schema.type.Number,
    },
    peso : {
        type: Schema.type.Number,
    }
})

const moto = db.model("index", motoSchema)



module.exports = moto;