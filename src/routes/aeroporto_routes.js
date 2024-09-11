const express = require("express");
const router = express.Router()
const cep_endereco = require("../cmiddlewares/cep_endereco.js");
const aeroporto_controller = require("../controllers/caneta_controller")

router.post("/",cep_endereco ,aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)
router.put("/:id", cep_endereco,aeroporto_controller.update)
router.delete("/:id", aeroporto_controller.destroy)

module.exports = Router