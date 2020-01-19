const models = require("../models");
const events = models.events;
const locations = models.locations;
const tickets = models.tickets;



exports.showAll = (req, res) => {
    events.findAll().then(data => {
        res.send(data)
    }

    );
};


exports.showOne = (req, res) => {
    events.findOne({ where: { id: req.params.id } }).then(data => {
        res.send(data)
    });
};


exports.update = (req, res) => {
    events.update({ where: { id: req.params.id } }).then(data => {
        res.send({
            massage: "update success",
            events
        })
    });
};



exports.createOne = (req, res) => {
    // events.create(req.body).then(data =>
    let endTime = new Date();
    endTime.setDate(endTime.getDate() + 1)
    events.create(
        {
            title: req.body.title,
            startTime: req.body.startTime,
            endTime: endTime,
            id_loc: req.body.id_loc,
            detail_loc: req.body.detail_loc
        }
    ).then(data =>
        res.send({
            message: "success",
            data
        })
    );
};


exports.all = (req, res) => {
    events
        .findAll({
            include: [
                {
                    model: locations,
                    as: "location"
                },
                {
                    model: tickets,
                    as: "event"
                }
            ]
        })
        .then(data => {
            if (data.length > 0) {
                res.status(200).json((data));
            } else {
                res.status(200).json({
                    message: "event not founds"
                });
            }
        });
};


