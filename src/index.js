const express = require("express")
const app = express()
const port = 5000

const aeroporto_routes = require("./routes/aeroporto_routes.js")
const moto_routes = require("./routes/moto_routes.js")
const refrigerante_routes = require("./routes/refrigerante_routes.js")
const caneta_routes = require("./routes/caneta_routes.js")

app.use(express.json())

app.use("/aeroporto", aeroporto_routes)

app.listen(port, () => console.log("Servidor escutando na porta " + port))

// -----------------------------------------------------------------------------

app.use(express.json())

app.use("/caneta", caneta_routes)


// ------------------------------------------------------------------

app.use(express.json())

app.use("/moto", moto_routes)

// ----------------------------------------------------------------------------

app.use(express.json())

app.use("/refrigerante", refrigerante_routes)

