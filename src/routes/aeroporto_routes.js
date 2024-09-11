const express = require("express");
const router = express.Router()

const aeroporto_controller = require("../controllers/caneta_controller")

router.post("/", aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)
router.get("/:id", aeroporto_controller.update)
router.get("/:id", aeroporto_controller.destroy)

module.exports = Router