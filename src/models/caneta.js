const db = require("../src/db.js")

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor : {    
        type: Schema.Types.String,
        required: true
    },
    ehBic: {
        type: Schema.Types.String,
    required: true,
    },
})

const caneta = db.model("caneta", canetaSchema)



module.exports = caneta;