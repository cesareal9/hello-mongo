// const express = require("express");
// const router = express.Router()
// const cep_endereco = require("../middlewares/cep_endereco.js");
// const aeroporto = require("../controllers/aeroporto.js")

// router.post("/",cep_endereco ,aeroporto.store)
// router.get("/", aeroporto.index)
// router.get("/:id", aeroporto.show)
// router.put("/:id", cep_endereco,aeroporto.update)
// router.delete("/:id", aeroporto.destroy)

// module.exports = Router()

const express = require("express");
const router = express.Router()

const aeroporto_controller = require("../controllers/aeroporto_controller")

router.post("/", aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)

module.exports = router