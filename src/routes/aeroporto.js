const express = require("express");
const router = express.Router()
const cep_endereco = require("../middlewares/cep_endereco.js");
const aeroporto = require("../controllers/aeroporto.js")

router.post("/",cep_endereco ,aeroporto.store)
router.get("/", aeroporto.index)
router.get("/:id", aeroporto.show)
router.put("/:id", cep_endereco,aeroporto.update)
router.delete("/:id", aeroporto.destroy)

module.exports = Router()