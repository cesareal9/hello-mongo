const db = require("./db.js")

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor : {    
        type: Schema.types.String,
        required: true
    },
    ehBic: {
        type: Schema.type.Boolean,
    },
})

const caneta = db.model("index", canetaSchema)



module.exports = caneta;