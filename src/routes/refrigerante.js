// const express = require("express");
// const router = express.Router()

// const refrigerante_controller = require("../controllers/refrigerante_controller")

// router.post("/", refrigerante_controller.store)
// router.get("/", refrigerante_controller.index)
// router.get("/:id", refrigerante_controller.show)
// router.get("/:id", refrigerante_controller.update)
// router.get("/:id", refrigerante_controller.destroy)

// module.exports = Routerconst express = require("express");

const router = express.Router()

const refrigerante_controller = require("../controllers/refrigerante_controller")

router.post("/", refrigerante_controller.store)
router.get("/", refrigerante_controller.index)
router.get("/:id", refrigerante_controller.show)

module.exports = router