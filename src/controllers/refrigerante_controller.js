const store = (req, res) => {
    refrigerante.create(req.body);
    res.json();
}

const index = (req, res) => {
    const content = refrigerante.find().exec();
        res.json(content);
}

const show = (req, res) => {
    const content = refrigerante.findById(req.params.id).exec();
    res.json(content);
}

const update = (req, res) => {
    refrigerante.findByIdAndUpdate(req.params.id,req.body).exec();
    res.json(content)
}

const destroy = (req, res) => {
    refrigerante.findByIdAndDelete(req.params.id, req.body().exec());
        res.json();
};