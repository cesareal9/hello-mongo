// const aeroporto = require('../models/aeroporto.js');

// const store = (req, res) => {
//     aeroporto.create(req.body);
//     res.json();
// };

// const index = (req, res) => {
//     const content = aeroporto.find().exec();
//     res.json(content);
// };

// const show = (req, rest) => {
//     const content = aeroporto.findById(req.params.id).exec();
//     res.json(content);
// };

// const update = (req, res) => {
//     aeroporto.findByIdAndUpdate(req.params.id, req.body).exec();
//     res.json();
// };

// const destroy = (req, res) => {
//     aeroporto.findByIdAndDelete(req.params.id).exec();
//     res.json();
// };

// module.exports = {
//     store,
//     index,
//     show,
//     update,
//     destroy,
// };

const express = require("express");
const router = express.Router()

const aeroporto_controller = require("../controllers/aeroporto_controller")

router.post("/", aeroporto_controller.store)
router.get("/", aeroporto_controller.index)
router.get("/:id", aeroporto_controller.show)

module.exports = router