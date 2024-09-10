const moogoose = require("mongoose")

const mongoDB = "mongodb://localhost:27017/aluguel"

async function main(){
    await moogoose.connect(mongoDB)
}

main()
.then (()=> console.log("conectado com sucesso!"))
.catch(err => console.log(err))

module.exports = mongoose;

module.exports = Livro