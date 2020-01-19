const models = require("../models");
const locations = models.locations;
// const { Events } = require("../helpers/functions");

exports.showAll = (req, res) => {
    locations.findAll().then(data => res.send(data));
};


exports.showOne = (req, res) => {
    locations.findOne({ where: { id: req.params.id } }).then(data => {
        res.send(data)
    });
};


exports.update = (req, res) => {
    locations.update({ where: { id: req.params.id } }).then(data => {
        res.send({
            massage: "update success",
            locations
        })
    });
};



exports.createOne = (req, res) => {
    locations.create(req.body).then(data =>
        res.send({
            message: "success",
            data
        })
    );
};