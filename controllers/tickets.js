const models = require("../models");
const tickets = models.tickets;

const {
    Events,
    formatDate,
    formatRupiah,
    formatDateEvent,
    formatTime
} = require("../helpers/functions");


exports.showAll = (req, res) => {
    tickets.findAll().then(data => res.send(data));
};


exports.showOne = (req, res) => {
    tickets.findOne({ where: { id: req.params.id } }).then(data => {
        res.send(data)
    });
};


exports.update = (req, res) => {
    tickets.update({ where: { id: req.params.id } }).then(data => {
        res.send({
            massage: "update success",
            tickets
        })
    });
};



exports.createOne = (req, res) => {
    tickets.create(req.body).then(data =>
        res.send({
            message: "success",
            data
        })
    );
};