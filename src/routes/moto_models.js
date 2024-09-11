const express = require("express");
const router = express.Router()

const moto_controller = require("../controllers/caneta_controller")

router.post("/", moto_controller.store)
router.get("/", moto_controller.index)
router.get("/:id", moto_controller.show)
router.get("/:id", moto_controller.update)
router.get("/:id", moto_controller.destroy)

module.exports = Router