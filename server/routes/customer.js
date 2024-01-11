const router = require("express").Router();
const crud = require("./../crud");
const collectionName = "customer";

router.get("/read", (req, res) => {
    const data = req.query;

    crud.read(collectionName, data)
        .then(customers => res.json(customers))
        .catch(error => res.status(400).json(error));
})

router.post("/create", (req, res) => {
    const data = req.body;

    crud.create(collectionName, data)
        .then(customers => res.json(customers))
        .catch(error => res.status(400).json(error));
})

router.put("/update", (req, res) => {
    const data = req.body;

    crud.update(collectionName, data)
        .then(customers => res.json(customers))
        .catch(error => res.status(400).json(error));
})

router.delete("/delete", (req, res) => {
    const data = req.body;

    crud.deleteOne(collectionName, data)
        .then(customers => res.json(customers))
        .catch(error => res.status(400).json(error));
})

module.exports = router;
