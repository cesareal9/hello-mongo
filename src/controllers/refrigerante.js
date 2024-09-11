// const refrigerante = require('../models/refrigerante.js');

// const store = (req, res) => {
//     refrigerante.create(req.body);
//     res.json();
// };

// const index = (req, res) => {
//     const content = refrigerante.find().exec();
//     res.json(content);
// };

// const show = (req, rest) => {
//     const content = refrigerante.findById(req.params.id).exec();
//     res.json(content);
// };

// const update = (req, res) => {
//     refrigerante.findByIdAndUpdate(req.params.id, req.body).exec();
//     res.json();
// };

// const destroy = (req, res) => {
//     refrigerante.findByIdAndDelete(req.params.id).exec();
//     res.json();
// };

// module.exports = {
//     store,
//     index,
//     show,
//     update,
//     destroy,
// };const refrigerante = require('../models/refrigerante.js');

const store = (req, res) => {
    refrigerante.create(req.body)
        .then(content => res.json(content))
        .catch(error => res.status(500).json({ error: error.message }));
};

const index = (req, res) => {
    refrigerante.find().exec()
        .then(content => res.json(content))
        .catch(error => res.status(500).json({ error: error.message }));
};

const show = (req, res) => {
    refrigerante.findById(req.params.id).exec()
        .then(content => res.json(content))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports = {
    store,
    index,
    show,
};