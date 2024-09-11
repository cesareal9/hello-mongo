const db = require('../src/db.js')

const Schema = db.Schema;

const motoSchema = new Schema({
    marca : {    
        type: Schema.Types.String,
        required: true,
    },
    cor: {
        type: Schema.Types.String,
    required: true,
    },
    modelo : {
        type: Schema.Types.String,
    required: true,
    },
    cilindrada: {
        type: Schema.Types.Number,
    },
    peso : {
        type: Schema.Types.Number,
    }
})

const moto = db.model("moto", motoSchema)



module.exports = moto();